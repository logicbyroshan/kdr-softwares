# KDR Softwares — System Architecture & Design Specification

## 1. System Overview

KDR Softwares (`https://kdrsoftwares.in`) is engineered as a decoupled, multi-tier corporate software platform designed for high performance, deterministic reliability, and long-term maintainability.

```
+-------------------------------------------------------------------------------+
|                                CLIENT TIER                                    |
|                                                                               |
|  React 19 + TypeScript + Vite + Tailwind CSS                                  |
|  - Client-Side Routing (React Router DOM v7)                                  |
|  - Real-Time 3D CAD Canvas Simulation & HTML5 Video Engine                    |
|  - 50/50 Seam-Docked Trusted Client & Solution Cards                          |
|  - Dynamic Mega-Menu & Mobile Navigation Drawer                               |
|  - Resilient Axios API Client with Built-in Offline Fallbacks                 |
+---------------------------------------+---------------------------------------+
                                        |  HTTPS / JSON REST API
                                        v
+-------------------------------------------------------------------------------+
|                              APPLICATION TIER                                 |
|                                                                               |
|  Django 5.2 + Django REST Framework (DRF)                                     |
|  - Modular App Structure (core, products, services, portfolio, etc.)          |
|  - Versioned API Routing (/api/v1/...)                                        |
|  - Rate Throttling (Anon: 60/min, Enquiries: 10/hr)                           |
|  - Spam Protection (Honeypot fields, IP logging)                              |
|  - CORS Security (django-cors-headers with strict origin whitelisting)        |
|  - Comprehensive Django Admin with Inlines and Custom Filters                 |
+---------------------------------------+---------------------------------------+
                                        |  Django ORM / psycopg2
                                        v
+-------------------------------------------------------------------------------+
|                                DATABASE TIER                                  |
|                                                                               |
|  PostgreSQL 15+ (Production) / SQLite 3 (Zero-Config Local Dev Fallback)      |
|  - Relational Schema with Integrity Constraints & Indexes                     |
|  - Singleton Configuration Pattern for SiteSettings                           |
|  - ACID Transactional Safety for Client Enquiries                             |
+-------------------------------------------------------------------------------+
```

---

## 2. Core Business Domains

### 2.1 Proprietary Software Products
1. **CardFlow**:
   - Commercial ID card data management and production workflow platform.
   - Manages multi-institution workspaces, dynamic custom schemas, Excel/Word data intake, embedded photo extraction, algorithmic photo matching, duplicate detection, and verification approval workflows.
   - Export pipeline generates CorelDRAW-compatible merged bundles, Excel backups, and organized photo archives.
   - Over **100,000 real production cards** processed.
2. **PrintFlow**:
   - ID card design and printing automation platform.
   - Automates sheet imposition, 1D/2D barcode generation, and print queue coordination.
   - Integration with CardFlow is on the active development roadmap.
3. **EazeFlow**:
   - Digital productivity and document utility for high-volume spreadsheet sanitization, format standardization, and secure offline-first processing.

### 2.2 Custom Engineering Services
- **Custom Software Development**: Enterprise workflow engines, ERP modules, bespoke management portals.
- **Web Development**: High-performance web applications, SaaS platforms, client portals.
- **Mobile Application Development**: Native Android and cross-platform apps with offline-first synchronization.
- **AI Solutions**: Practical Intelligent Document Processing (IDP), OCR data extraction, and computer vision face detection.

---

## 3. Frontend Component Hierarchy

```
App.tsx
├── ScrollToTop (Auto-scroll on route change)
├── Navbar
│   ├── Brand Monogram & Wordmark
│   ├── Navigation Links
│   ├── MegaMenu (Products dropdown)
│   └── MobileDrawer (Accessible mobile navigation)
├── Routes
│   ├── / -> Home.tsx
│   │   ├── HeroSection (Cinematic video loop + 3D CAD canvas + 50% docked client cards)
│   │   ├── TrustSection (Architectural stack: Python, PostgreSQL, React, CorelDRAW, Android)
│   │   ├── AboutSection (Editorial philosophy & Indore headquarters)
│   │   ├── ProductsShowcase (CardFlow, PrintFlow, EazeFlow asymmetric panels)
│   │   ├── ServicesSection (Interactive master-detail selector for 4 pillars)
│   │   ├── WhyChooseSection (6 pragmatic differentiators)
│   │   ├── StatsSection (Verified production metrics)
│   │   ├── ProcessSection (6-stage execution cycle)
│   │   ├── PortfolioSection (Featured production deployments)
│   │   ├── TestimonialsSection (Genuine MVP customer testimonial)
│   │   ├── PricingSection (Transparent CardFlow licensing & custom milestones)
│   │   ├── FaqAccordion (Categorized knowledge base)
│   │   └── ContactSection (Validated inquiry form + Navlakha Indore Google Map)
│   ├── /about -> About.tsx
│   ├── /products -> ProductsHub.tsx
│   ├── /products/:slug -> ProductDetail.tsx (CardFlow, PrintFlow, EazeFlow)
│   ├── /services -> ServicesHub.tsx
│   ├── /services/:slug -> ServiceDetail.tsx (Custom Software, Web, Mobile, AI)
│   ├── /portfolio -> PortfolioHub.tsx
│   ├── /contact -> ContactPage.tsx
│   ├── /faq -> FaqPage.tsx
│   ├── /privacy -> PrivacyPolicy.tsx
│   └── /terms -> TermsConditions.tsx
└── Footer (Multi-column corporate navigation, legal, social links, copyright)
```

---

## 4. Backend Modular Applications

| App Name | Responsibilities | Key Models |
| :--- | :--- | :--- |
| `apps.core` | System configuration, impact statistics, trusted client cards | `SiteSettings`, `Statistic`, `TrustedClient` |
| `apps.products` | Product catalog, feature matrices, roadmap status | `Product`, `ProductFeature`, `ProductScreenshot` |
| `apps.services` | Service pillars, deliverables, strategic business benefits | `Service`, `ServiceBenefit` |
| `apps.portfolio`| Client and internal case studies, technology stacks | `PortfolioProject` |
| `apps.testimonials` | Approved, verified client feedback | `Testimonial` |
| `apps.faqs` | Categorized questions and answers | `FAQ` |
| `apps.pricing` | Transparent product tiers and custom quotation scopes | `PricingPlan` |
| `apps.enquiries`| Public inquiry intake, spam validation, notification dispatch | `Enquiry` |

---

## 5. Security & Data Integrity

1. **Environment Separation**: Secrets, database credentials, allowed hosts, and debug flags are loaded strictly via `.env` using `python-dotenv`.
2. **Spam & Bot Mitigation**: Public inquiry submission endpoints include honeypot fields (`website_url_hp`) and IP rate throttling (10 submissions per hour per IP).
3. **Fail-Safe Email Dispatch**: Inquiries are guaranteed to persist into the database even if the SMTP gateway experiences transient failures or is not configured.
4. **Data Isolation in Products**: Customer rosters and identity datasets processed through CardFlow instances remain strictly under customer custody with zero cloud retention.
