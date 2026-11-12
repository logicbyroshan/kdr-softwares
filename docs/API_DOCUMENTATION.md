# KDR Softwares — REST API Specification (`/api/v1/`)

All API endpoints are versioned under `/api/v1/` and return standard JSON responses.

Base URLs:
- **Development**: `http://127.0.0.1:8000/api/v1/`
- **Production**: `https://api.kdrsoftwares.in/api/v1/` (or `https://kdrsoftwares.in/api/v1/`)

---

## 1. Site Settings

### `GET /site-settings/`
Retrieves corporate identity, hero configuration, location, emails, and SEO metadata.

#### Response `200 OK`
```json
{
  "company_name": "KDR Softwares",
  "tagline": "Practical Software Products & Custom Technology Solutions",
  "hero_headline": "We turn complex operations into powerful digital solutions.",
  "hero_subheadline": "From innovative software products like CardFlow to custom-built enterprise systems...",
  "hero_video_url": "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4",
  "footer_description": "KDR Softwares develops practical software products and custom technology solutions...",
  "general_email": "contact@kdrsoftwares.in",
  "support_email": "support@kdrsoftwares.in",
  "location_text": "Navlakha, Indore, Madhya Pradesh, India",
  "map_embed_url": "https://www.google.com/maps/embed?pb=...",
  "social_linkedin": "https://linkedin.com/company/kdrsoftwares",
  "social_twitter": "https://x.com/kdrsoftwares",
  "social_github": "https://github.com/kdrsoftwares",
  "social_youtube": "https://youtube.com/@kdrsoftwares",
  "meta_title": "KDR Softwares — Software Products & Custom Technology Solutions",
  "meta_description": "KDR Softwares builds practical software products like CardFlow...",
  "updated_at": "2026-11-01T16:39:02.303044+05:30"
}
```

---

## 2. Impact Statistics

### `GET /statistics/`
Returns verified production outcomes.

#### Response `200 OK`
```json
[
  {
    "id": 1,
    "label": "ID Cards Processed",
    "value": "100,000",
    "suffix": "+",
    "description": "Processed through CardFlow workflow engine in commercial ID-card production operations",
    "display_order": 1
  },
  {
    "id": 2,
    "label": "Core Software Products",
    "value": "3",
    "suffix": "Products",
    "description": "CardFlow, PrintFlow, and EazeFlow built to address distinct operational challenges",
    "display_order": 2
  },
  {
    "id": 3,
    "label": "Engineering Focus",
    "value": "100%",
    "suffix": "Practical",
    "description": "Focused on usable, dependable workflows rather than exaggerated marketing claims",
    "display_order": 3
  }
]
```

---

## 3. Trusted Client Cards

### `GET /trusted-clients/`
Returns cards displayed docked below the hero video.

#### Response `200 OK`
```json
[
  {
    "id": 1,
    "name": "Commercial ID Printing Agency Partner",
    "category": "Commercial Agency",
    "tag": "100k+ Cards Workflow",
    "summary": "Commercial agency handling 30+ schools and colleges using CardFlow for automated data intake, photo extraction, and CorelDRAW print packages.",
    "image": null,
    "image_url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80",
    "link_url": "/products/cardflow",
    "display_order": 1
  }
]
```

### `POST /trusted-clients/`
Add a new client/partner card.

#### Request Body
```json
{
  "name": "Indore Identification Systems",
  "category": "Commercial Agency",
  "tag": "Active Deployment",
  "summary": "High-throughput ID verification and automated Word photo extraction across Central India.",
  "image_url": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&q=80",
  "link_url": "/products/cardflow",
  "display_order": 4
}
```

#### Response `201 Created`
```json
{
  "success": true,
  "message": "Client card added successfully.",
  "data": { ... }
}
```

---

## 4. Products

### `GET /products/`
Returns all software products with their features and roadmap tags.

#### Response `200 OK`
```json
[
  {
    "id": 1,
    "name": "CardFlow",
    "slug": "cardflow",
    "tagline": "ID-Card Data Management & Production Workflow Platform",
    "short_description": "An end-to-end data intake, verification, and production workflow engine purpose-built for commercial ID-card printing agencies.",
    "status": "active",
    "product_url": "/products/cardflow",
    "logo": null,
    "cover_image": null,
    "accent_color": "#2563EB",
    "is_featured": true,
    "display_order": 1,
    "features": [
      {
        "id": 1,
        "title": "Multiple Institution Management",
        "description": "Maintain distinct isolated workspaces, data rules, and staff permissions...",
        "icon_name": "Layers",
        "is_roadmap": false,
        "display_order": 1
      },
      {
        "id": 13,
        "title": "Intelligent PDF Design Interpretation",
        "description": "Roadmap capability: Automatic extraction and layout mapping...",
        "icon_name": "Wand2",
        "is_roadmap": true,
        "display_order": 13
      }
    ]
  }
]
```

### `GET /products/<slug>/`
Returns full product detail including extended narrative and screenshots.

---

## 5. Services

### `GET /services/`
Returns all service pillars and associated benefits.

### `GET /services/<slug>/`
Returns service details for `custom-software`, `web-development`, `mobile-apps`, or `ai-solutions`.

---

## 6. Portfolio

### `GET /portfolio/`
Returns portfolio projects.

### `GET /portfolio/<slug>/`
Returns project details by slug.

---

## 7. Testimonials

### `GET /testimonials/`
Returns genuine customer feedback approved for public display.

---

## 8. FAQs

### `GET /faqs/`
Optional query param: `?category=general|products|services|support`.

---

## 9. Pricing Plans

### `GET /pricing/`
Optional query param: `?product_slug=cardflow`.

---

## 10. Contact Enquiries

### `POST /enquiries/`
Public contact and project consultation submission.

#### Request Body
```json
{
  "full_name": "Vikram Sharma",
  "company_name": "Apex ID Card Printers",
  "email": "vikram@example.com",
  "phone": "+91 9876543210",
  "enquiry_type": "product",
  "subject": "CardFlow Agency Licensing",
  "message": "We handle 30+ schools in Central India and would like to license CardFlow.",
  "website_url_hp": ""
}
```

*Note: `website_url_hp` is a honeypot field. Legitimate users must leave it blank. Non-empty submissions will be rejected as automated bot spam.*

#### Response `201 Created`
```json
{
  "success": true,
  "message": "Thank you for reaching out to KDR Softwares. Your enquiry has been received and our team will review it promptly.",
  "id": 1
}
```
