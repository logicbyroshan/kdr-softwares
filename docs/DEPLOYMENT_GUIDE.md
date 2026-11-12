# KDR Softwares — Production Deployment & Operations Guide

This guide covers deploying KDR Softwares to Linux production environments (Ubuntu 22.04 LTS / Debian 12), configuring PostgreSQL, Nginx, Gunicorn, systemd services, SSL certificates, and frontend hosting.

---

## 1. Production Architecture Blueprint

```
[ Internet / HTTPS Visitors ]
              |
              v
       [ Nginx Reverse Proxy (Port 443 + Let's Encrypt SSL) ]
              |
              +---> / (Frontend SPA) ---------> Serves static bundle (/var/www/kdr/frontend/dist)
              |
              +---> /api/ & /admin/ -----------> Gunicorn WSGI Server (127.0.0.1:8000)
              |                                          |
              +---> /static/ & /media/                   v
                    (Served directly by Nginx)   [ Django REST Backend ]
                                                         |
                                                         v
                                                 [ PostgreSQL 15+ ]
```

---

## 2. Server Provisioning

```bash
# Update server packages
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y python3-pip python3-venv python3-dev libpq-dev postgresql postgresql-contrib nginx curl git certbot python3-certbot-nginx

# Install Node.js LTS (v20+)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

## 3. PostgreSQL Database Configuration

```bash
# Switch to postgres user
sudo -u postgres psql

-- Create production database and user
CREATE DATABASE kdr_production_db;
CREATE USER kdr_db_user WITH ENCRYPTED PASSWORD 'YOUR_SECURE_DB_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE kdr_production_db TO kdr_db_user;
ALTER DATABASE kdr_production_db OWNER TO kdr_db_user;
\q
```

---

## 4. Application Deployment

```bash
# Clone repository
sudo mkdir -p /var/www/kdr
sudo chown -R $USER:$USER /var/www/kdr
git clone https://github.com/logicbyroshan/kdr-softwares.git /var/www/kdr
cd /var/www/kdr

# -----------------
# 4.1 Backend Setup
# -----------------
cd /var/www/kdr/backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn

# Configure production environment
cp .env.example .env
nano .env
```

Ensure your `.env` contains:
```env
DJANGO_SECRET_KEY=generate-a-strong-random-50-character-key
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=kdrsoftwares.in,www.kdrsoftwares.in,api.kdrsoftwares.in,YOUR_SERVER_IP

DATABASE_URL=postgres://kdr_db_user:YOUR_SECURE_DB_PASSWORD@localhost:5432/kdr_production_db

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=postmaster@kdrsoftwares.in
EMAIL_HOST_PASSWORD=your_smtp_key
DEFAULT_FROM_EMAIL=KDR Softwares <contact@kdrsoftwares.in>
COMPANY_NOTIFICATION_EMAIL=contact@kdrsoftwares.in
```

```bash
# Run migrations & seed data
python manage.py migrate
python seed_data.py
python create_admin.py
python manage.py collectstatic --noinput

# ------------------
# 4.2 Frontend Setup
# ------------------
cd /var/www/kdr/frontend
npm install
npm run build
# The optimized bundle will be created at /var/www/kdr/frontend/dist
```

---

## 5. Systemd Service (Gunicorn)

Create `/etc/systemd/system/kdr-backend.service`:
```ini
[Unit]
Description=KDR Softwares Gunicorn Backend Daemon
After=network.target postgresql.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/kdr/backend
EnvironmentFile=/var/www/kdr/backend/.env
ExecStart=/var/www/kdr/backend/venv/bin/gunicorn \
          --workers 3 \
          --bind 127.0.0.1:8000 \
          --timeout 60 \
          --access-logfile /var/log/gunicorn/kdr-access.log \
          --error-logfile /var/log/gunicorn/kdr-error.log \
          kdr_backend.wsgi:application

Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo mkdir -p /var/log/gunicorn
sudo chown -R www-data:www-data /var/log/gunicorn
sudo chown -R www-data:www-data /var/www/kdr/backend/media

sudo systemctl daemon-reload
sudo systemctl start kdr-backend
sudo systemctl enable kdr-backend
```

---

## 6. Nginx Web Server Configuration

Create `/etc/nginx/sites-available/kdrsoftwares.in`:
```nginx
server {
    server_name kdrsoftwares.in www.kdrsoftwares.in;
    listen 80;

    # Frontend Single Page Application
    location / {
        root /var/www/kdr/frontend/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend Django REST APIs
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Django Admin Portal
    location /admin/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static & Media Assets
    location /static/ {
        alias /var/www/kdr/backend/staticfiles/;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }

    location /media/ {
        alias /var/www/kdr/backend/media/;
        expires 7d;
    }

    client_max_body_size 25M;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/kdrsoftwares.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 7. SSL Certificate Installation

```bash
sudo certbot --nginx -d kdrsoftwares.in -d www.kdrsoftwares.in
```

Certbot will automatically install the Let's Encrypt SSL certificates and configure HTTP-to-HTTPS redirects.

---

## 8. Backup & Maintenance Routines

### Daily Database Backup Cron Job
```bash
# Add to /etc/cron.daily/kdr_db_backup
#!/bin/bash
BACKUP_DIR="/var/backups/kdr"
mkdir -p $BACKUP_DIR
TIMESTAMP=$(date +\%Y\%m\%d_\%H\%M\%S)
pg_dump -U kdr_db_user -h localhost kdr_production_db | gzip > "$BACKUP_DIR/kdr_db_$TIMESTAMP.sql.gz"
find $BACKUP_DIR -name "*.sql.gz" -mtime +14 -exec rm {} \;
```
```bash
sudo chmod +x /etc/cron.daily/kdr_db_backup
```
