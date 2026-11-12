# KDR Softwares — Premium Corporate Website & Technology Platform

[![Frontend](https://img.shields.io/badge/Frontend-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20CSS-blue?style=flat-square)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Django%205.2%20%7C%20REST%20Framework-green?style=flat-square)](https://www.djangoproject.com/)
[![Database](https://img.shields.io/badge/Database-PostgreSQL%20%7C%20SQLite-indigo?style=flat-square)](https://www.postgresql.org/)
[![Status](https://img.shields.io/badge/Production-Ready-emerald?style=flat-square)](https://kdrsoftwares.in)

> **Official Domain:** [https://kdrsoftwares.in](https://kdrsoftwares.in)  
> **Corporate Headquarters:** Navlakha, Indore, Madhya Pradesh, India  
> **General Inquiries:** [contact@kdrsoftwares.in](mailto:contact@kdrsoftwares.in)  
> **Technical Support:** [support@kdrsoftwares.in](mailto:support@kdrsoftwares.in)  

---

## 📖 Table of Contents
1. [Executive Summary & Brand Philosophy](#1-executive-summary--brand-philosophy)
2. [Product Suite & Engineering Services](#2-product-suite--engineering-services)
3. [Technology Stack](#3-technology-stack)
4. [Repository Architecture](#4-repository-architecture)
5. [Local Development Setup](#5-local-development-setup)
6. [PostgreSQL Configuration](#6-postgresql-configuration)
7. [Django Admin CMS](#7-django-admin-cms)
8. [REST API Documentation](#8-rest-api-documentation)
9. [Production Build & Deployment](#9-production-build--deployment)
10. [Extended Documentation](#10-extended-documentation)

---

## 1. Executive Summary & Brand Philosophy

**KDR Softwares** is a software products and technology solutions company operating out of Navlakha, Indore, Madhya Pradesh. Designed with the visual confidence and engineering rigor of premier product organizations such as Adobe, Autodesk, and Corel, the platform communicates authority, uncompromising truthfulness, and operational clarity.

### Strict Content Authenticity
- **Zero Fabricated Claims**: No artificial customer metrics, awards, or fake testimonials.
- **Verified Production Milestone**: **CardFlow** has processed **over 100,000 real production ID cards** across commercial printing operations.
- **Physical Print Workflow Distinction**: CardFlow handles data intake, spreadsheet parsing, photo extraction, duplicate identification, and CorelDRAW export packages. Physical layout design and printing remain with the agency's external pre-press tools, while direct print generation with **PrintFlow** is accurately disclosed as an active **roadmap capability**.
- **Authentic Client Feedback**: Features verified feedback from an agency partner who adopted CardFlow from its early MVP rollout.

---

## 2. Product Suite & Engineering Services

### 2.1 Software Products
- **CardFlow**: Commercial ID card data management and production workflow platform. Manages multi-institution workspaces, dynamic custom schemas, Excel/Word data intake, embedded photo extraction, bulk photo matching, duplicate detection, and CorelDRAW pre-press exports.
- **PrintFlow**: ID card design and printing automation platform engineered for high-density sheet imposition, barcode/QR generation, and print queue automation. *(CardFlow integration on roadmap).*
- **EazeFlow**: Digital productivity and document utility for spreadsheet normalization, data sanitization, and secure offline-first processing.

### 2.2 Custom Engineering Services
- **Custom Software Development**: Enterprise workflow engines, ERP modules, bespoke management portals.
- **Web Development**: High-performance corporate portals, multi-tenant SaaS platforms, admin consoles.
- **Mobile Application Development**: Native Android & cross-platform business apps with offline-first caching.
- **AI Solutions**: Practical Intelligent Document Processing (IDP), OCR data extraction, and computer vision face detection.

---

## 3. Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS, PostCSS, React Router DOM v7, Lucide Icons, Axios |
| **Hero Graphics** | Real-time 3D CAD Wireframe Canvas Simulation, HTML5 Video Loop Engine, Interactive Play/Pause HUD |
| **Backend** | Python 3.11, Django 5.2, Django REST Framework 3.18, django-cors-headers, Pillow |
| **Database** | PostgreSQL 15+ (Production) with automatic zero-config SQLite fallback for local development |
| **Security** | Throttled endpoints, honeypot bot mitigation, SSL/TLS headers, strict CORS whitelisting |

---

## 4. Repository Architecture

```
KDR Softwares/
├── docs/                           # Comprehensive technical manuals
│   ├── ARCHITECTURE.md             # System design & component hierarchy
│   ├── API_DOCUMENTATION.md        # Complete REST API reference with JSON schemas
│   └── DEPLOYMENT_GUIDE.md         # Production Ubuntu, Nginx, Gunicorn & SSL guide
├── backend/
│   ├── apps/
│   │   ├── core/                   # SiteSettings, Statistics, TrustedClient cards
│   │   ├── products/               # Product, ProductFeature (roadmap tags), ProductScreenshot
│   │   ├── services/               # Service, ServiceBenefit
│   │   ├── portfolio/              # PortfolioProject
│   │   ├── testimonials/           # Genuine customer testimonials
│   │   ├── faqs/                   # Categorized FAQs
│   │   ├── pricing/                # Transparent pricing plans
│   │   └── enquiries/              # Public inquiries, honeypot protection, email dispatcher
│   ├── kdr_backend/
│   │   ├── settings.py             # Settings, CORS, REST throttles, DB config
│   │   ├── urls.py                 # Versioned /api/v1/ routes & Admin portal
│   │   └── wsgi.py
│   ├── seed_data.py                # Database seeder with 100% verified data
│   ├── create_admin.py             # Default superuser generator
│   ├── requirements.txt            # Python dependencies
│   ├── .env.example                # Environment variables blueprint
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── api/client.ts           # Resilient API client with offline fallbacks
│   │   ├── types/index.ts          # TypeScript domain interfaces
│   │   ├── components/
│   │   │   ├── common/             # Button, Badge, Container, SectionHeading, DynamicIcon
│   │   │   ├── navigation/         # Navbar, MegaMenu dropdown, MobileDrawer
│   │   │   ├── footer/             # Corporate footer with legal & contact info
│   │   │   └── sections/           # Hero (video + 3D CAD + 50/50 cards), Trust, About, Products, etc.
│   │   ├── pages/                  # Home, About, Products, Services, Portfolio, Contact, FAQ, Legal
│   │   ├── App.tsx                 # Client routing & 404 handler
│   │   └── main.tsx
│   ├── public/                     # Monogram SVG, sitemap.xml, robots.txt
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

## 5. Local Development Setup

### Prerequisites
- Python 3.10+
- Node.js 18+ & npm 9+
- PostgreSQL *(optional; SQLite is used automatically if PostgreSQL credentials are unset)*

### 5.1 Backend Setup
```bash
# 1. Navigate to backend
cd backend

# 2. Create and activate virtual environment
python -m venv venv

# Windows:
.\venv\Scripts\activate
# Linux / macOS:
# source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
copy .env.example .env    # On Linux/macOS use: cp .env.example .env

# 5. Run migrations & seed verified data
python manage.py migrate
python seed_data.py

# 6. Create default admin superuser (admin / admin123)
python create_admin.py

# 7. Start backend API server
python manage.py runserver 127.0.0.1:8000
```

### 5.2 Frontend Setup
```bash
# In a new terminal:
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open **`http://localhost:5173`** in your browser.

---

## 6. PostgreSQL Configuration

To use PostgreSQL in production or local environments, set `DATABASE_URL` or individual parameters in `backend/.env`:

```env
# Option A: Full connection URL
DATABASE_URL=postgres://kdr_user:your_password@localhost:5432/kdr_db

# Option B: Individual variables
POSTGRES_DB=kdr_db
POSTGRES_USER=kdr_user
POSTGRES_PASSWORD=your_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

Then execute:
```bash
python manage.py migrate
python seed_data.py
```

---

## 7. Django Admin CMS

Access the administration portal at:  
👉 **`http://127.0.0.1:8000/admin/`**

- **Username**: `admin`
- **Password**: `admin123` *(Change immediately upon production deployment)*

### Manageable Content Without Code Changes
- **Site Settings**: Live modification of hero headlines, background video URL, contact emails, location, Google Maps iframe, and SEO meta tags.
- **Trusted Client Cards**: Add, reorder, or edit the cards docked below the hero video.
- **Products & Feature Matrices**: Toggle roadmap flags, edit descriptions, upload screenshots.
- **Services**: Manage the 4 service pillars and associated benefits.
- **Portfolio**: Manage client and internal case studies.
- **Inquiries**: Review client inquiries with read-only audit logging and status workflows (`New` → `In Review` → `Contacted` → `Closed`).

---

## 8. REST API Documentation

All endpoints are versioned under `/api/v1/`:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/site-settings/` | Company profile, hero copy, video URL, location, SEO |
| `GET` | `/api/v1/statistics/` | Verified production outcomes (e.g. 100k+ cards processed) |
| `GET` | `/api/v1/trusted-clients/` | Cards docked below the hero video |
| `POST`| `/api/v1/trusted-clients/` | Add a new client or partner card |
| `GET` | `/api/v1/products/` | Complete product catalog with roadmap flags |
| `GET` | `/api/v1/products/<slug>/` | Full product specification by slug |
| `GET` | `/api/v1/services/` | All technology services and deliverables |
| `GET` | `/api/v1/services/<slug>/` | Service details by slug |
| `GET` | `/api/v1/portfolio/` | Portfolio projects |
| `GET` | `/api/v1/testimonials/` | Approved and published customer testimonials |
| `GET` | `/api/v1/faqs/` | FAQs with optional `?category=` filter |
| `GET` | `/api/v1/pricing/` | Transparent product & custom software pricing |
| `POST`| `/api/v1/enquiries/` | Public inquiry submission with honeypot spam protection |

*See [`docs/API_DOCUMENTATION.md`](docs/API_DOCUMENTATION.md) for full request/response schemas.*

---

## 9. Production Build & Deployment

### Build Frontend
```bash
cd frontend
npm run build
```
Creates an optimized, tree-shaken static bundle in `frontend/dist/`.

### Deployment Guides
See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md) for comprehensive step-by-step instructions covering:
- Linux server provisioning (Ubuntu 22.04 LTS)
- PostgreSQL database setup
- Gunicorn systemd daemon configuration
- Nginx reverse proxy configuration for SPA routing & API forwarding
- Automated Let's Encrypt SSL/TLS installation via Certbot
- Automated daily database backup scripts

---

## 10. Extended Documentation

- [System Architecture Specification](docs/ARCHITECTURE.md)
- [REST API Reference & JSON Schemas](docs/API_DOCUMENTATION.md)
- [Production Deployment & Operations Guide](docs/DEPLOYMENT_GUIDE.md)

---

## License

This project is licensed under the [MIT License](LICENSE).
© 2026 KDR Softwares. Registered in Navlakha, Indore, Madhya Pradesh, India.
