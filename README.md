# KDR Softwares — Premium Corporate Website & Technology Platform

Full-Stack Implementation using **React + TypeScript + Tailwind CSS** (Frontend) and **Django REST Framework + PostgreSQL** (Backend).

Official Domain: **[https://kdrsoftwares.in](https://kdrsoftwares.in)**  
Headquarters: **Navlakha, Indore, Madhya Pradesh, India**  
General Inquiries: **[contact@kdrsoftwares.in](mailto:contact@kdrsoftwares.in)**  
Technical Support: **[support@kdrsoftwares.in](mailto:support@kdrsoftwares.in)**  

---

## 1. Project Overview & Architectural Philosophy

**KDR Softwares** is a software products and technology solutions company operating across two principal pillars:
1. **Proprietary Software Products**:
   - **CardFlow**: An end-to-end ID-card data management and production workflow platform designed specifically for commercial ID-card printing agencies. Handles multi-institution client workspaces, dynamic tables & custom fields, Excel & Word data imports, embedded photo extraction, bulk photo matching algorithms, duplicate detection, and CorelDRAW pre-press export bundles. *(Over 100,000 real production cards processed).*
   - **PrintFlow**: An independently hosted ID-card design and printing automation platform engineered for high-density sheet imposition, barcode/QR generation, and print queue automation. *(Integrated with CardFlow on the product roadmap).*
   - **EazeFlow**: A digital productivity and document utility for batch format standardization, spreadsheet sanitization, and offline-first processing.
2. **Custom Software & Technology Development Services**:
   - Custom Software & Workflow Automation
   - Web Applications & Multi-Tenant SaaS
   - Native Android & Business Mobile Applications
   - Pragmatic AI, Computer Vision & Intelligent Document Processing (IDP)

---

## 2. Technology Stack

- **Frontend**:
  - React 19 + TypeScript + Vite
  - Tailwind CSS + Autoprefixer + PostCSS
  - React Router DOM v7 (Clean client-side routing & deep linking)
  - Lucide React (Streamlined icons)
  - Axios (Robust REST client with offline resilience fallbacks)
- **Backend**:
  - Python 3.11 + Django 5.2 + Django REST Framework 3.18
  - PostgreSQL (Configurable via `DATABASE_URL` or standard DB credentials, with seamless local SQLite fallback)
  - `django-cors-headers` (Secured CORS integration)
  - `dj-database-url` + `python-dotenv`
  - Pillow (Image asset handling)
- **Database & CMS**:
  - PostgreSQL Relational Database
  - Production-Hardened Django Admin (Singleton settings, filter controls, inline feature editors, read-only timestamps)

---

## 3. Repository Architecture

```
KDR Softwares/
├── backend/
│   ├── apps/
│   │   ├── core/           # SiteSettings (singleton), Statistic, SEO defaults
│   │   ├── products/       # Product, ProductFeature (with roadmap flags), ProductScreenshot
│   │   ├── services/       # Service, ServiceBenefit
│   │   ├── portfolio/      # PortfolioProject (tech chips, categories, live URLs)
│   │   ├── testimonials/   # Testimonial (genuine MVP customer testimonial)
│   │   ├── faqs/           # FAQ (General, Products, Services, Support)
│   │   ├── pricing/        # PricingPlan (Product tiers & Custom engineering scopes)
│   │   └── enquiries/      # Enquiry model, spam protection, SMTP notification dispatcher
│   ├── kdr_backend/
│   │   ├── settings.py     # Production settings, CORS, REST throttles, DB config
│   │   ├── urls.py         # Versioned /api/v1/ endpoints & Admin portal
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── seed_data.py        # Database population script with 100% verified data
│   ├── create_admin.py     # Admin superuser generator
│   ├── requirements.txt    # Python package dependencies
│   ├── .env.example        # Environment variable specification
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── client.ts   # Axios client with fallback datasets
│   │   ├── types/
│   │   │   └── index.ts    # Comprehensive TypeScript interfaces
│   │   ├── components/
│   │   │   ├── common/     # Button, Badge, Container, SectionHeading, DynamicIcon
│   │   │   ├── navigation/ # Navbar, MegaMenu dropdown, MobileDrawer
│   │   │   ├── footer/     # Footer with brand wordmark, social links, legal
│   │   │   └── sections/   # Hero, Trust, About, Products, Services, Stats, Process, Portfolio, etc.
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Complete 13-section corporate homepage
│   │   │   ├── About.tsx           # Company origins & engineering manifesto
│   │   │   ├── ProductsHub.tsx     # Product suite overview
│   │   │   ├── ProductDetail.tsx   # Detailed specs for CardFlow, PrintFlow, EazeFlow
│   │   │   ├── ServicesHub.tsx     # Services catalog
│   │   │   ├── ServiceDetail.tsx   # Deep dives for Custom Software, Web, Mobile, AI
│   │   │   ├── PortfolioHub.tsx    # Filterable project gallery
│   │   │   ├── ContactPage.tsx     # Contact desk with interactive Google Map embed
│   │   │   ├── FaqPage.tsx         # Searchable knowledge base
│   │   │   ├── PrivacyPolicy.tsx   # Corporate Privacy Policy
│   │   │   └── TermsConditions.tsx # Terms & Conditions
│   │   ├── index.css       # Tailwind base, utilities, custom glassmorphism
│   │   ├── App.tsx         # Router configuration & 404 handler
│   │   └── main.tsx
│   ├── public/
│   │   ├── logo.svg        # Geometric KDR brand monogram
│   │   ├── robots.txt      # Search engine crawler instructions
│   │   └── sitemap.xml     # Full XML sitemap
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

## 4. Local Development Setup

### Prerequisites
- Python 3.10+
- Node.js 18+ & npm 9+
- PostgreSQL (Optional for production; SQLite acts as local dev fallback)

### Step 1: Backend Setup
```bash
# Navigate to backend
cd backend

# Create & activate Python virtual environment
python -m venv venv

# Windows:
.\venv\Scripts\activate
# Linux/macOS:
# source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Configure environment variables
copy .env.example .env

# Run database migrations
python manage.py migrate

# Seed database with verified KDR Softwares data
python seed_data.py

# Create default Django Admin superuser (admin / admin123)
python create_admin.py

# Launch development API server
python manage.py runserver 127.0.0.1:8000
```

### Step 2: Frontend Setup
```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## 5. PostgreSQL Production Database Configuration

To connect Django to PostgreSQL in production or local environments, supply the connection URL in `backend/.env`:

```env
# Full connection string format:
DATABASE_URL=postgres://kdr_user:your_password@localhost:5432/kdr_db

# Or individual parameters:
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

## 6. Django Admin & CMS Management

Access the administration portal at:  
👉 **`http://127.0.0.1:8000/admin/`**

- **Default Superuser**: `admin`
- **Default Password**: `admin123` *(Change immediately upon production deployment)*

### Management Capabilities
- **Site Settings**: Live modification of hero headlines, general and support emails, office location, map embed iframe, social URLs, and default SEO meta tags.
- **Products**: Manage CardFlow, PrintFlow, and EazeFlow descriptions, status badges, and inline feature matrices (with clear distinction between live capabilities and roadmap items).
- **Services**: Manage 4 core pillars with custom benefits and icons.
- **Portfolio**: Update client projects, cover images, and technology tags.
- **Testimonials**: Review and publish verified customer testimonials.
- **FAQs**: Categorized accordion management with instant frontend reflection.
- **Enquiries**: Review incoming customer inquiries with client IP address, read-only audit log, and status workflow tracking (`New` → `In Review` → `Contacted` → `Closed`).

---

## 7. Versioned REST API Endpoints (`/api/v1/`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/site-settings/` | Company profile, emails, location, and social links |
| `GET` | `/api/v1/statistics/` | Verified production metrics (e.g. 100,000+ cards processed) |
| `GET` | `/api/v1/products/` | Complete list of active software products and features |
| `GET` | `/api/v1/products/<slug>/` | Product deep-dive by slug (`cardflow`, `printflow`, `eazeflow`) |
| `GET` | `/api/v1/services/` | All technology services and deliverables |
| `GET` | `/api/v1/services/<slug>/` | Service details by slug |
| `GET` | `/api/v1/portfolio/` | Selected client projects & internal platforms |
| `GET` | `/api/v1/testimonials/` | Approved and published customer testimonials |
| `GET` | `/api/v1/faqs/` | FAQs with optional `?category=products` filtering |
| `GET` | `/api/v1/pricing/` | Transparent product & custom software pricing plans |
| `POST` | `/api/v1/enquiries/` | Public inquiry submission with honeypot spam protection |

---

## 8. Frontend Production Build

```bash
cd frontend
npm run build
```
Generates an optimized, minified production bundle in `frontend/dist/`.

