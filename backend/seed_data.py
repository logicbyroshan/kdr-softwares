"""
Database seeding script for KDR Softwares.
Populates verified company data, products, services, FAQs, and stats with strict adherence to truthfulness.
"""

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kdr_backend.settings')
django.setup()

from apps.core.models import SiteSettings, Statistic
from apps.products.models import Product, ProductFeature
from apps.services.models import Service, ServiceBenefit
from apps.portfolio.models import PortfolioProject
from apps.testimonials.models import Testimonial
from apps.faqs.models import FAQ
from apps.pricing.models import PricingPlan


def seed():
    print("=== Seeding KDR Softwares database ===")

    # 1. Site Settings
    settings, _ = SiteSettings.objects.get_or_create(pk=1)
    settings.company_name = "KDR Softwares"
    settings.tagline = "Practical Software Products & Custom Technology Solutions"
    settings.hero_headline = "We turn complex operations into powerful digital solutions."
    settings.hero_subheadline = (
        "From innovative software products to custom-built technology, we help businesses "
        "simplify operations, work smarter and grow through technology."
    )
    settings.footer_description = (
        "KDR Softwares develops practical software products and custom technology solutions "
        "that help businesses simplify complex operations, improve productivity and scale with confidence."
    )
    settings.general_email = "contact@kdrsoftwares.in"
    settings.support_email = "support@kdrsoftwares.in"
    settings.location_text = "Navlakha, Indore, Madhya Pradesh, India"
    settings.map_embed_url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.364964673898!2d75.8711467!3d22.6974786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd27dbbc1c79%3A0xe5f9be8f9b98ff30!2sNavlakha%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    settings.social_linkedin = "https://linkedin.com/company/kdrsoftwares"
    settings.social_twitter = "https://x.com/kdrsoftwares"
    settings.social_github = "https://github.com/kdrsoftwares"
    settings.social_youtube = "https://youtube.com/@kdrsoftwares"
    settings.meta_title = "KDR Softwares — Software Products & Custom Technology Solutions"
    settings.meta_description = (
        "KDR Softwares builds practical software products like CardFlow and provides "
        "high-performance custom software, web, mobile, and AI solutions for businesses."
    )
    settings.save()
    print("  [OK] SiteSettings configured")

    # 2. Statistics
    Statistic.objects.all().delete()
    Statistic.objects.create(
        label="ID Cards Processed",
        value="100,000",
        suffix="+",
        description="Processed through CardFlow workflow engine in commercial ID-card production operations",
        display_order=1,
        is_published=True
    )
    Statistic.objects.create(
        label="Core Software Products",
        value="3",
        suffix="Products",
        description="CardFlow, PrintFlow, and EazeFlow built to address distinct operational challenges",
        display_order=2,
        is_published=True
    )
    Statistic.objects.create(
        label="Engineering Focus",
        value="100%",
        suffix="Practical",
        description="Focused on usable, dependable workflows rather than exaggerated marketing claims",
        display_order=3,
        is_published=True
    )
    print("  [OK] Statistics seeded")

    # 3. Products
    Product.objects.all().delete()

    cardflow = Product.objects.create(
        name="CardFlow",
        slug="cardflow",
        tagline="ID-Card Data Management & Production Workflow Platform",
        short_description="An end-to-end data intake, verification, and production workflow engine purpose-built for commercial ID-card printing agencies.",
        full_description=(
            "CardFlow is an ID-card data management and production workflow platform designed specifically for commercial ID-card printing agencies. "
            "It eliminates data bottlenecks by handling multi-institution client rosters, Excel and Word spreadsheets, embedded photo extraction, "
            "automated facial and filename photograph matching, duplicate detection, and staff approval hierarchies.\n\n"
            "Important note: CardFlow manages data and production workflows. Printing agencies use CorelDRAW or their preferred external software "
            "for physical card layout design and printing. CardFlow and PrintFlow are actively progressing along an integrated roadmap toward "
            "direct print-ready card generation and intelligent template mapping."
        ),
        status="active",
        product_url="/products/cardflow",
        accent_color="#2563EB",
        is_featured=True,
        display_order=1
    )

    cardflow_features = [
        ("Multiple Institution Management", "Maintain distinct isolated workspaces, data rules, and staff permissions for schools, colleges, and corporations.", "Layers", False, 1),
        ("Dynamic Tables & Custom Fields", "Create custom data schemas per institution with configurable field types, validations, and auto-computed attributes.", "Database", False, 2),
        ("Excel & Word Data Imports", "Robust data intake pipeline supporting raw Excel sheets and formatted Word document rosters without manual retyping.", "FileSpreadsheet", False, 3),
        ("Embedded Photo Extraction", "Automatically detect, crop, and extract embedded student and staff photographs from Word documents and PDFs.", "ScanFace", False, 4),
        ("Bulk Photograph Matching", "Match thousands of unorganized photo files to student records using smart roll number, admission number, and name algorithms.", "FolderSync", False, 5),
        ("Student & Employee Records Management", "Centralized, searchable record repository with full lifecycle tracking from raw draft to approved print run.", "Users", False, 6),
        ("Automated Duplicate Detection", "Identify duplicate roll numbers, repetitive admissions, and mismatched names before costly print runs occur.", "ShieldAlert", False, 7),
        ("Data Verification & Approval Workflows", "Multi-stage verification portal where institutions can review, correct, and officially approve records online.", "FileCheck", False, 8),
        ("Staff Roles & Permissions", "Granular operator, verifier, and agency administrator access controls for secure data handling.", "KeyRound", False, 9),
        ("Reprint & Revision Management", "Effortlessly track replacement requests, lost cards, and data revisions with clear historical audits.", "RotateCcw", False, 10),
        ("Multi-Format Production Exports", "Generate production packages formatted for CorelDRAW, Excel spreadsheets, Word summaries, and organized ZIP photo archives.", "Download", False, 11),
        ("Android Companion Application", "Field-ready mobile application for on-campus verification, photo capture, and instantaneous record lookup.", "Smartphone", False, 12),
        ("Intelligent PDF Design Interpretation", "Roadmap capability: Automatic extraction and layout mapping from existing client PDF templates directly into print workflows.", "Wand2", True, 13),
        ("PrintFlow Integrated Card Generation", "Roadmap capability: Native automated rendering of print-ready card layouts directly inside the workflow pipeline.", "Printer", True, 14),
    ]

    for title, desc, icon, is_roadmap, order in cardflow_features:
        ProductFeature.objects.create(
            product=cardflow,
            title=title,
            description=desc,
            icon_name=icon,
            is_roadmap=is_roadmap,
            display_order=order
        )

    printflow = Product.objects.create(
        name="PrintFlow",
        slug="printflow",
        tagline="ID-Card Design & Printing Automation Product",
        short_description="An independently hosted printing automation product engineered to bridge data pipelines with precision design layouts.",
        full_description=(
            "PrintFlow is an ID-card design and printing automation product. It is independently hosted and engineered to automate repetitive print sheet formatting, "
            "barcode placement, and print queue management. In conjunction with CardFlow, it provides the technological foundation for fully automated "
            "data-to-print execution."
        ),
        status="in_development",
        product_url="/products/printflow",
        accent_color="#7C3AED",
        is_featured=True,
        display_order=2
    )

    printflow_features = [
        ("Automated Sheet Imposition", "Organize card layouts into high-density press sheets optimized for standard commercial card printers.", "Grid", False, 1),
        ("Precision Template Parsing", "Interpret vector coordinates and variable text fields with micron-level alignment.", "Maximize", False, 2),
        ("Barcode & QR Code Engine", "Dynamic generation of high-resolution 1D and 2D barcodes tied directly to record identifiers.", "QrCode", False, 3),
        ("Seamless CardFlow Integration Bridge", "Roadmap capability: Direct bi-directional API connection to CardFlow verified record batches.", "GitMerge", True, 4),
    ]

    for title, desc, icon, is_roadmap, order in printflow_features:
        ProductFeature.objects.create(
            product=printflow,
            title=title,
            description=desc,
            icon_name=icon,
            is_roadmap=is_roadmap,
            display_order=order
        )

    eazeflow = Product.objects.create(
        name="EazeFlow",
        slug="eazeflow",
        tagline="Digital Productivity & Document Utility Product",
        short_description="A streamlined document utility engineered to simplify repetitive document transformations, cleanup, and conversions for modern businesses.",
        full_description=(
            "EazeFlow is a digital productivity and document utility product. Built for business teams that handle hundreds of documents weekly, "
            "EazeFlow automates tedious format standardizations, text extraction, spreadsheet sanitization, and asset bundling."
        ),
        status="in_development",
        product_url="/products/eazeflow",
        accent_color="#0D9488",
        is_featured=True,
        display_order=3
    )

    eazeflow_features = [
        ("Batch Document Normalization", "Standardize inconsistent formats across PDFs, Word documents, and spreadsheets in seconds.", "FileText", False, 1),
        ("Structured Data Cleansing", "Strip invalid characters, correct casing, and eliminate whitespace irregularities from large rosters.", "Sparkles", False, 2),
        ("Secure Offline-First Processing", "High-speed local processing engine ensuring sensitive organizational data remains protected.", "Shield", False, 3),
    ]

    for title, desc, icon, is_roadmap, order in eazeflow_features:
        ProductFeature.objects.create(
            product=eazeflow,
            title=title,
            description=desc,
            icon_name=icon,
            is_roadmap=is_roadmap,
            display_order=order
        )

    print("  [OK] Products & Features seeded")

    # 4. Services
    Service.objects.all().delete()

    custom_software = Service.objects.create(
        name="Custom Software Development",
        slug="custom-software",
        short_description="Architecting robust business management software, workflow automation engines, and custom enterprise tools tailored to your operational realities.",
        full_description=(
            "Off-the-shelf software often forces businesses to compromise their unique workflows. KDR Softwares designs and builds tailored "
            "custom software systems from the ground up. Whether you require an internal workflow automation engine, a high-volume operational "
            "database, an enterprise dashboard, or specialized ERP modules, we construct reliable, maintainable software engineered to scale."
        ),
        icon_name="Code2",
        display_order=1,
        is_active=True
    )
    for title, desc, order in [
        ("Engineered for Exact Workflows", "Eliminate manual steps with software custom-built around how your team actually works.", 1),
        ("High-Performance Backend Architecture", "Powered by Python, Django, PostgreSQL, and modern API standards for resilient data handling.", 2),
        ("Full Source Ownership & Scalability", "No recurring per-seat penalties; maintain complete control over your technological assets.", 3),
    ]:
        ServiceBenefit.objects.create(service=custom_software, title=title, description=desc, display_order=order)

    web_dev = Service.objects.create(
        name="Web Development",
        slug="web-development",
        short_description="Building high-performance corporate websites, SaaS web applications, customer portals, and intuitive administrative dashboards.",
        full_description=(
            "We build web applications that combine aesthetic clarity with bulletproof engineering. From modern corporate websites that "
            "communicate brand authority to complex, multi-tenant SaaS platforms and administrative dashboards, we utilize React, TypeScript, "
            "Tailwind CSS, and REST architectures to deliver snappy, secure web experiences."
        ),
        icon_name="Globe",
        display_order=2,
        is_active=True
    )
    for title, desc, order in [
        ("Fast, Responsive User Experiences", "Optimized Core Web Vitals, responsive design across all viewports, and accessible interactions.", 1),
        ("Modular React & REST Architecture", "Clean separation of presentation and business logic for long-term maintainability.", 2),
        ("Production Security & SEO Ready", "Structured data, security headers, role-based authorization, and search engine optimization built-in.", 3),
    ]:
        ServiceBenefit.objects.create(service=web_dev, title=title, description=desc, display_order=order)

    mobile_dev = Service.objects.create(
        name="Mobile Application Development",
        slug="mobile-apps",
        short_description="Engineering reliable Android and cross-platform mobile applications that seamlessly connect on-ground teams with central systems.",
        full_description=(
            "In modern enterprise operations, frontline workers, verification staff, and field operators need real-time digital access. "
            "We develop native Android and cross-platform business mobile applications integrated directly with your central APIs. "
            "Features include offline-first caching, camera & barcode scanning, and secure authentication."
        ),
        icon_name="Smartphone",
        display_order=3,
        is_active=True
    )
    for title, desc, order in [
        ("Field-Ready Offline Capabilities", "Continue recording data in low-connectivity environments and synchronize automatically.", 1),
        ("Hardware & Sensor Integration", "Smooth camera scanning, image capture, and biometric identification workflows.", 2),
        ("Secure API Communication", "Token-based authentication, encrypted local storage, and granular access control.", 3),
    ]:
        ServiceBenefit.objects.create(service=mobile_dev, title=title, description=desc, display_order=order)

    ai_solutions = Service.objects.create(
        name="AI Solutions",
        slug="ai-solutions",
        short_description="Practical AI integration: intelligent document processing, OCR extraction, computer vision photo matching, and automated pipelines.",
        full_description=(
            "We focus on practical, return-on-investment-driven artificial intelligence. Rather than implementing generative AI as a gimmick, "
            "we develop intelligent document processing (IDP) systems, Optical Character Recognition (OCR) pipelines, automated face extraction, "
            "and machine learning classification models that directly cut hundreds of manual processing hours."
        ),
        icon_name="Sparkles",
        display_order=4,
        is_active=True
    )
    for title, desc, order in [
        ("Intelligent Document Processing (IDP)", "Extract structured fields from unstandardized PDF, Word, and scanned forms automatically.", 1),
        ("Computer Vision & Image Extraction", "High-accuracy face detection, automated cropping, and quality verification for identification records.", 2),
        ("Pragmatic Workflow Integration", "Deploy AI models directly into existing production software without complex infrastructure bloat.", 3),
    ]:
        ServiceBenefit.objects.create(service=ai_solutions, title=title, description=desc, display_order=order)

    print("  [OK] Services & Benefits seeded")

    # 5. Portfolio
    PortfolioProject.objects.all().delete()
    PortfolioProject.objects.create(
        title="CardFlow — ID Card Production Management Platform",
        slug="cardflow-platform",
        category="Software Product",
        client_or_context="Commercial Print Agency Production Workflow",
        short_summary="A specialized enterprise workflow system handling multi-institution ID data, bulk photo matching, and approval cycles.",
        detailed_description=(
            "Commercial ID card printing agencies routinely handle hundreds of educational institutions, each with completely different Excel sheets, "
            "unmatched photo folders, and strict delivery deadlines. CardFlow centralizes this entire operational pipeline. Over 100,000 real production "
            "ID records have been managed through CardFlow's multi-stage verification workflows, photo extraction algorithms, and CorelDRAW export utilities."
        ),
        technologies="React, Django REST Framework, PostgreSQL, Tailwind CSS, Python, Android SDK",
        project_url="/products/cardflow",
        is_featured=True,
        display_order=1,
        published_status=True
    )
    PortfolioProject.objects.create(
        title="PrintFlow — Automated ID Imposition Engine",
        slug="printflow-engine",
        category="Automation Engine",
        client_or_context="Independent ID Printing Automation Product",
        short_summary="High-speed template layout generation and print batch imposition engine.",
        detailed_description=(
            "PrintFlow addresses the physical pre-press bottleneck by taking structured records and programmatically placing them onto printer-ready "
            "sheet layouts with precision barcodes and registration marks. Designed as an independent engine that pairs with CardFlow."
        ),
        technologies="Python, Vector Graphics Processing, REST APIs, Microservices",
        project_url="/products/printflow",
        is_featured=True,
        display_order=2,
        published_status=True
    )
    PortfolioProject.objects.create(
        title="EazeFlow — Business Document Utility",
        slug="eazeflow-utility",
        category="Productivity Utility",
        client_or_context="Corporate Document Normalization & Sanitization",
        short_summary="A lightweight digital utility for high-volume document standardization and batch file conversion.",
        detailed_description=(
            "Built to solve recurring clerical inefficiencies when ingesting dirty Excel spreadsheets and unformatted Word documents. "
            "EazeFlow cleanses, normalizes, and extracts structured datasets with zero cloud data retention for maximum privacy."
        ),
        technologies="TypeScript, Electron, Node.js, Python Parser",
        project_url="/products/eazeflow",
        is_featured=True,
        display_order=3,
        published_status=True
    )
    print("  [OK] Portfolio projects seeded")

    # 6. Testimonial (1 genuine testimonial from MVP stage customer)
    Testimonial.objects.all().delete()
    Testimonial.objects.create(
        customer_name="Commercial ID Agency Partner",
        designation="Operations Lead",
        company="Commercial Identification & Print Services",
        testimonial_text=(
            "Before adopting CardFlow during its early MVP rollout, handling disparate data formats and manually matching student photos for dozens of schools "
            "every academic season consumed weeks of manual effort and led to costly reprints. CardFlow's multi-institution structure and automated photo "
            "matching transformed our workflow turnaround and drastically reduced errors."
        ),
        related_product=cardflow,
        display_order=1,
        is_published=True
    )
    print("  [OK] Genuine Testimonial seeded")

    # 7. FAQs
    FAQ.objects.all().delete()
    faqs_data = [
        # General
        ("What does KDR Softwares do?", "KDR Softwares develops practical software products and builds custom technology solutions that help businesses simplify complex operations, automate workflows, and grow through technology.", "general", 1),
        ("What are the company's two primary business areas?", "We have two core focuses: developing our own software products (such as CardFlow, PrintFlow, and EazeFlow) and engineering custom software, web platforms, mobile apps, and AI solutions for client organizations.", "general", 2),
        ("Does KDR Softwares work with businesses of different sizes?", "Yes. We work with commercial agencies, growing companies, and established enterprises that require dependable software engineered around real business processes.", "general", 3),
        ("Where is KDR Softwares located?", "KDR Softwares is based in Navlakha, Indore, Madhya Pradesh, India.", "general", 4),
        
        # Products
        ("What is CardFlow?", "CardFlow is an ID-card data management and production workflow platform designed specifically for commercial ID-card printing agencies to manage institutions, extract data, verify records, and coordinate production.", "products", 5),
        ("Does CardFlow design and print the physical ID cards directly?", "CardFlow currently manages the critical data intake, verification, photo matching, and production export workflows. Printing agencies use CorelDRAW or their preferred design software for physical layout and printing. Direct design interpretation and automated print-ready rendering via PrintFlow are actively on our development roadmap.", "products", 6),
        ("What is PrintFlow?", "PrintFlow is an independently hosted ID-card design and printing automation product. It is engineered to automate template parsing, sheet imposition, and batch generation, and can also integrate with CardFlow.", "products", 7),
        ("What is EazeFlow?", "EazeFlow is a digital productivity and document utility product designed to automate routine document transformations, data sanitization, and batch file conversions.", "products", 8),
        
        # Services
        ("What custom software development services do you offer?", "We engineer custom business management software, workflow automation engines, custom dashboards, enterprise ERP modules, and tailor-made database applications.", "services", 9),
        ("What technologies do you use for web and mobile development?", "Our primary stack includes modern React, TypeScript, Tailwind CSS, Python, Django REST Framework, and PostgreSQL, along with Android mobile development.", "services", 10),
        ("What AI solutions do you provide?", "We specialize in pragmatic AI solutions: Intelligent Document Processing (IDP), OCR data extraction, computer vision photo matching, and automated workflow pipelines.", "services", 11),
        ("How can I request a quotation for custom software?", "You can submit an enquiry via our Contact page or email contact@kdrsoftwares.in with your project requirements. We will analyze your scope and schedule an architectural discussion.", "services", 12),
        
        # Support
        ("How can I contact KDR Softwares for technical support?", "Existing clients and product users can reach our technical support team directly at support@kdrsoftwares.in.", "support", 13),
        ("Does KDR Softwares provide ongoing software maintenance?", "Yes. All custom software and enterprise product engagements include structured maintenance options, performance monitoring, and updates.", "support", 14),
    ]

    for q, a, cat, order in faqs_data:
        FAQ.objects.create(question=q, answer=a, category=cat, display_order=order, is_published=True)

    print("  [OK] FAQs seeded")

    # 8. Pricing
    PricingPlan.objects.all().delete()
    PricingPlan.objects.create(
        product=cardflow,
        name="CardFlow Agency Production Tier",
        price="Custom Agency Quote",
        billing_period="per production season / annual",
        description="Designed for commercial ID card printing agencies managing multiple schools, colleges, and enterprise rosters.",
        features="Multiple institution client workspaces\nDynamic table & custom field configurations\nExcel and Word data imports\nEmbedded photo extraction engine\nAutomated bulk photo matching\nMulti-stage verification and approval portal\nReprint and audit tracking\nExport bundles for CorelDRAW, Excel, and Word\nAndroid companion app support",
        cta_text="Enquire for CardFlow",
        cta_url="/contact",
        is_featured=True,
        display_order=1,
        is_published=True
    )
    PricingPlan.objects.create(
        product=None,
        name="Custom Software Development",
        price="Milestone Quotation",
        billing_period="milestone-based delivery",
        description="Tailor-made software systems, automated workflow engines, and enterprise web or mobile applications built to your exact specifications.",
        features="Detailed requirements analysis & architectural blueprint\nTailored full-stack implementation (React + Django + PostgreSQL)\nFull source code ownership with no per-user fees\nRole-based access control and security hardening\nAPI integration with your existing legacy systems\nDedicated QA testing and production deployment\nStructured post-launch warranty and support",
        cta_text="Request Custom Proposal",
        cta_url="/contact",
        is_featured=False,
        display_order=2,
        is_published=True
    )
    print("  [OK] Pricing Plans seeded")

    print("\n[SUCCESS] Database seeding completed successfully!")


if __name__ == '__main__':
    seed()
