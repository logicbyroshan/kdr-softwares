import axios from 'axios';
import {
  SiteSettings,
  Statistic,
  TrustedClientCard,
  Product,
  Service,
  PortfolioProject,
  Testimonial,
  FAQ,
  PricingPlan,
  EnquiryPayload,
  EnquiryResponse
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Fallback Data in case the backend is temporarily offline
export const FALLBACK_SETTINGS: SiteSettings = {
  company_name: 'KDR Softwares',
  tagline: 'Practical Software Products & Custom Technology Solutions',
  hero_headline: 'We turn complex operations into powerful digital solutions.',
  hero_subheadline: 'From innovative software products like CardFlow to custom-built enterprise systems, we help businesses simplify operations, eliminate bottlenecks and scale with confidence.',
  hero_video_url: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4',
  footer_description: 'KDR Softwares develops practical software products and custom technology solutions that help businesses simplify complex operations, improve productivity and scale with confidence.',
  general_email: 'contact@kdrsoftwares.in',
  support_email: 'support@kdrsoftwares.in',
  location_text: 'Navlakha, Indore, Madhya Pradesh, India',
  map_embed_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.364964673898!2d75.8711467!3d22.6974786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd27dbbc1c79%3A0xe5f9be8f9b98ff30!2sNavlakha%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  social_linkedin: 'https://linkedin.com/company/kdrsoftwares',
  social_twitter: 'https://x.com/kdrsoftwares',
  social_github: 'https://github.com/kdrsoftwares',
  social_youtube: 'https://youtube.com/@kdrsoftwares',
  meta_title: 'KDR Softwares — Software Products & Custom Technology Solutions',
  meta_description: 'KDR Softwares builds practical software products like CardFlow and provides high-performance custom software, web, mobile, and AI solutions.',
  updated_at: new Date().toISOString(),
};

export const FALLBACK_TRUSTED_CLIENTS: TrustedClientCard[] = [
  {
    id: 1,
    name: 'Commercial ID Printing Agency Partner',
    category: 'Commercial Agency',
    tag: '100k+ Cards Workflow',
    summary: 'Commercial agency handling 30+ schools and colleges using CardFlow for automated data intake, photo extraction, and CorelDRAW print packages.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80',
    link_url: '/products/cardflow',
    display_order: 1,
  },
  {
    id: 2,
    name: 'Educational Campus Roster Network',
    category: 'Institutional Client',
    tag: 'Multi-Institution Portal',
    summary: 'Academic verification portals managing tens of thousands of student records, duplicate elimination, and parent approval sign-offs.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&q=80',
    link_url: '/products/cardflow',
    display_order: 2,
  },
  {
    id: 3,
    name: 'Corporate Identification & Logistics Alliance',
    category: 'Enterprise Partner',
    tag: 'Tailored Custom Software',
    summary: 'Custom enterprise software and Android mobile apps for frontline verification, photo capture, and high-security PostgreSQL integration.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80',
    link_url: '/services/custom-software',
    display_order: 3,
  },
];

export const FALLBACK_STATS: Statistic[] = [
  {
    id: 1,
    label: 'ID Cards Processed',
    value: '100,000',
    suffix: '+',
    description: 'Processed through CardFlow workflow engine in commercial ID-card production operations',
    display_order: 1,
  },
  {
    id: 2,
    label: 'Core Software Products',
    value: '3',
    suffix: 'Products',
    description: 'CardFlow, PrintFlow, and EazeFlow built to address distinct operational challenges',
    display_order: 2,
  },
  {
    id: 3,
    label: 'Engineering Focus',
    value: '100%',
    suffix: 'Practical',
    description: 'Focused on usable, dependable workflows rather than exaggerated marketing claims',
    display_order: 3,
  },
];

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'CardFlow',
    slug: 'cardflow',
    tagline: 'ID-Card Data Management & Production Workflow Platform',
    short_description: 'An end-to-end data intake, verification, and production workflow engine purpose-built for commercial ID-card printing agencies.',
    full_description: 'CardFlow is an ID-card data management and production workflow platform designed specifically for commercial ID-card printing agencies. It eliminates data bottlenecks by handling multi-institution client rosters, Excel and Word spreadsheets, embedded photo extraction, automated facial and filename photograph matching, duplicate detection, and staff approval hierarchies.\n\nImportant note: CardFlow manages data and production workflows. Printing agencies use CorelDRAW or their preferred external software for physical card layout design and printing. CardFlow and PrintFlow are actively progressing along an integrated roadmap toward direct print-ready card generation and intelligent template mapping.',
    status: 'active',
    product_url: '/products/cardflow',
    logo: null,
    cover_image: null,
    accent_color: '#2563EB',
    is_featured: true,
    display_order: 1,
    features: [
      { id: 1, title: 'Multiple Institution Management', description: 'Maintain distinct isolated workspaces, data rules, and staff permissions for schools, colleges, and corporations.', icon_name: 'Layers', is_roadmap: false, display_order: 1 },
      { id: 2, title: 'Dynamic Tables & Custom Fields', description: 'Create custom data schemas per institution with configurable field types, validations, and auto-computed attributes.', icon_name: 'Database', is_roadmap: false, display_order: 2 },
      { id: 3, title: 'Excel & Word Data Imports', description: 'Robust data intake pipeline supporting raw Excel sheets and formatted Word document rosters without manual retyping.', icon_name: 'FileSpreadsheet', is_roadmap: false, display_order: 3 },
      { id: 4, title: 'Embedded Photo Extraction', description: 'Automatically detect, crop, and extract embedded student and staff photographs from Word documents and PDFs.', icon_name: 'ScanFace', is_roadmap: false, display_order: 4 },
      { id: 5, title: 'Bulk Photograph Matching', description: 'Match thousands of unorganized photo files to student records using smart roll number, admission number, and name algorithms.', icon_name: 'FolderSync', is_roadmap: false, display_order: 5 },
      { id: 6, title: 'Student & Employee Records Management', description: 'Centralized, searchable record repository with full lifecycle tracking from raw draft to approved print run.', icon_name: 'Users', is_roadmap: false, display_order: 6 },
      { id: 7, title: 'Automated Duplicate Detection', description: 'Identify duplicate roll numbers, repetitive admissions, and mismatched names before costly print runs occur.', icon_name: 'ShieldAlert', is_roadmap: false, display_order: 7 },
      { id: 8, title: 'Data Verification & Approval Workflows', description: 'Multi-stage verification portal where institutions can review, correct, and officially approve records online.', icon_name: 'FileCheck', is_roadmap: false, display_order: 8 },
      { id: 9, title: 'Staff Roles & Permissions', description: 'Granular operator, verifier, and agency administrator access controls for secure data handling.', icon_name: 'KeyRound', is_roadmap: false, display_order: 9 },
      { id: 10, title: 'Reprint & Revision Management', description: 'Effortlessly track replacement requests, lost cards, and data revisions with clear historical audits.', icon_name: 'RotateCcw', is_roadmap: false, display_order: 10 },
      { id: 11, title: 'Multi-Format Production Exports', description: 'Generate production packages formatted for CorelDRAW, Excel spreadsheets, Word summaries, and organized ZIP photo archives.', icon_name: 'Download', is_roadmap: false, display_order: 11 },
      { id: 12, title: 'Android Companion Application', description: 'Field-ready mobile application for on-campus verification, photo capture, and instantaneous record lookup.', icon_name: 'Smartphone', is_roadmap: false, display_order: 12 },
      { id: 13, title: 'Intelligent PDF Design Interpretation', description: 'Roadmap capability: Automatic extraction and layout mapping from existing client PDF templates directly into print workflows.', icon_name: 'Wand2', is_roadmap: true, display_order: 13 },
      { id: 14, title: 'PrintFlow Integrated Card Generation', description: 'Roadmap capability: Native automated rendering of print-ready card layouts directly inside the workflow pipeline.', icon_name: 'Printer', is_roadmap: true, display_order: 14 },
    ]
  },
  {
    id: 2,
    name: 'PrintFlow',
    slug: 'printflow',
    tagline: 'ID-Card Design & Printing Automation Product',
    short_description: 'An independently hosted printing automation product engineered to bridge data pipelines with precision design layouts.',
    full_description: 'PrintFlow is an ID-card design and printing automation product. It is independently hosted and engineered to automate repetitive print sheet formatting, barcode placement, and print queue management. In conjunction with CardFlow, it provides the technological foundation for fully automated data-to-print execution.',
    status: 'in_development',
    product_url: '/products/printflow',
    logo: null,
    cover_image: null,
    accent_color: '#7C3AED',
    is_featured: true,
    display_order: 2,
    features: [
      { id: 15, title: 'Automated Sheet Imposition', description: 'Organize card layouts into high-density press sheets optimized for standard commercial card printers.', icon_name: 'Grid', is_roadmap: false, display_order: 1 },
      { id: 16, title: 'Precision Template Parsing', description: 'Interpret vector coordinates and variable text fields with micron-level alignment.', icon_name: 'Maximize', is_roadmap: false, display_order: 2 },
      { id: 17, title: 'Barcode & QR Code Engine', description: 'Dynamic generation of high-resolution 1D and 2D barcodes tied directly to record identifiers.', icon_name: 'QrCode', is_roadmap: false, display_order: 3 },
      { id: 18, title: 'Seamless CardFlow Integration Bridge', description: 'Roadmap capability: Direct bi-directional API connection to CardFlow verified record batches.', icon_name: 'GitMerge', is_roadmap: true, display_order: 4 },
    ]
  },
  {
    id: 3,
    name: 'EazeFlow',
    slug: 'eazeflow',
    tagline: 'Digital Productivity & Document Utility Product',
    short_description: 'A streamlined document utility engineered to simplify repetitive document transformations, cleanup, and conversions for modern businesses.',
    full_description: 'EazeFlow is a digital productivity and document utility product. Built for business teams that handle hundreds of documents weekly, EazeFlow automates tedious format standardizations, text extraction, spreadsheet sanitization, and asset bundling.',
    status: 'in_development',
    product_url: '/products/eazeflow',
    logo: null,
    cover_image: null,
    accent_color: '#0D9488',
    is_featured: true,
    display_order: 3,
    features: [
      { id: 19, title: 'Batch Document Normalization', description: 'Standardize inconsistent formats across PDFs, Word documents, and spreadsheets in seconds.', icon_name: 'FileText', is_roadmap: false, display_order: 1 },
      { id: 20, title: 'Structured Data Cleansing', description: 'Strip invalid characters, correct casing, and eliminate whitespace irregularities from large rosters.', icon_name: 'Sparkles', is_roadmap: false, display_order: 2 },
      { id: 21, title: 'Secure Offline-First Processing', description: 'High-speed local processing engine ensuring sensitive organizational data remains protected.', icon_name: 'Shield', is_roadmap: false, display_order: 3 },
    ]
  }
];

export const FALLBACK_SERVICES: Service[] = [
  {
    id: 1,
    name: 'Custom Software Development',
    slug: 'custom-software',
    short_description: 'Architecting robust business management software, workflow automation engines, and custom enterprise tools tailored to your operational realities.',
    full_description: 'Off-the-shelf software often forces businesses to compromise their unique workflows. KDR Softwares designs and builds tailored custom software systems from the ground up. Whether you require an internal workflow automation engine, a high-volume operational database, an enterprise dashboard, or specialized ERP modules, we construct reliable, maintainable software engineered to scale.',
    icon_name: 'Code2',
    cover_image: null,
    display_order: 1,
    is_active: true,
    benefits: [
      { id: 1, title: 'Engineered for Exact Workflows', description: 'Eliminate manual steps with software custom-built around how your team actually works.', display_order: 1 },
      { id: 2, title: 'High-Performance Backend Architecture', description: 'Powered by Python, Django, PostgreSQL, and modern API standards for resilient data handling.', display_order: 2 },
      { id: 3, title: 'Full Source Ownership & Scalability', description: 'No recurring per-seat penalties; maintain complete control over your technological assets.', display_order: 3 },
    ]
  },
  {
    id: 2,
    name: 'Web Development',
    slug: 'web-development',
    short_description: 'Building high-performance corporate websites, SaaS web platforms, customer portals, and intuitive administrative dashboards.',
    full_description: 'We build web applications that combine aesthetic clarity with bulletproof engineering. From modern corporate websites that communicate brand authority to complex, multi-tenant SaaS platforms and administrative dashboards, we utilize React, TypeScript, Tailwind CSS, and REST architectures to deliver snappy, secure web experiences.',
    icon_name: 'Globe',
    cover_image: null,
    display_order: 2,
    is_active: true,
    benefits: [
      { id: 4, title: 'Fast, Responsive User Experiences', description: 'Optimized Core Web Vitals, responsive design across all viewports, and accessible interactions.', display_order: 1 },
      { id: 5, title: 'Modular React & REST Architecture', description: 'Clean separation of presentation and business logic for long-term maintainability.', display_order: 2 },
      { id: 6, title: 'Production Security & SEO Ready', description: 'Structured data, security headers, role-based authorization, and search engine optimization built-in.', display_order: 3 },
    ]
  },
  {
    id: 3,
    name: 'Mobile Application Development',
    slug: 'mobile-apps',
    short_description: 'Engineering reliable Android and cross-platform mobile applications that seamlessly connect on-ground teams with central systems.',
    full_description: 'In modern enterprise operations, frontline workers, verification staff, and field operators need real-time digital access. We develop native Android and cross-platform business mobile applications integrated directly with your central APIs. Features include offline-first caching, camera & barcode scanning, and secure authentication.',
    icon_name: 'Smartphone',
    cover_image: null,
    display_order: 3,
    is_active: true,
    benefits: [
      { id: 7, title: 'Field-Ready Offline Capabilities', description: 'Continue recording data in low-connectivity environments and synchronize automatically.', display_order: 1 },
      { id: 8, title: 'Hardware & Sensor Integration', description: 'Smooth camera scanning, image capture, and biometric identification workflows.', display_order: 2 },
      { id: 9, title: 'Secure API Communication', description: 'Token-based authentication, encrypted local storage, and granular access control.', display_order: 3 },
    ]
  },
  {
    id: 4,
    name: 'AI Solutions',
    slug: 'ai-solutions',
    short_description: 'Practical AI integration: intelligent document processing, OCR extraction, computer vision photo matching, and automated pipelines.',
    full_description: 'We focus on practical, return-on-investment-driven artificial intelligence. Rather than implementing generative AI as a gimmick, we develop intelligent document processing (IDP) systems, Optical Character Recognition (OCR) pipelines, automated face extraction, and machine learning classification models that directly cut hundreds of manual processing hours.',
    icon_name: 'Sparkles',
    cover_image: null,
    display_order: 4,
    is_active: true,
    benefits: [
      { id: 10, title: 'Intelligent Document Processing (IDP)', description: 'Extract structured fields from unstandardized PDF, Word, and scanned forms automatically.', display_order: 1 },
      { id: 11, title: 'Computer Vision & Image Extraction', description: 'High-accuracy face detection, automated cropping, and quality verification for identification records.', display_order: 2 },
      { id: 12, title: 'Pragmatic Workflow Integration', description: 'Deploy AI models directly into existing production software without complex infrastructure bloat.', display_order: 3 },
    ]
  }
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    customer_name: 'Commercial ID Agency Partner',
    designation: 'Operations Lead',
    company: 'Commercial Identification & Print Services',
    testimonial_text: 'Before adopting CardFlow during its early MVP rollout, handling disparate data formats and manually matching student photos for dozens of schools every academic season consumed weeks of manual effort and led to costly reprints. CardFlow\'s multi-institution structure and automated photo matching transformed our workflow turnaround and drastically reduced errors.',
    image: null,
    related_product: 1,
    product_name: 'CardFlow',
    display_order: 1,
    created_at: new Date().toISOString(),
  }
];

export const FALLBACK_FAQS: FAQ[] = [
  { id: 1, question: 'What does KDR Softwares do?', answer: 'KDR Softwares develops practical software products and builds custom technology solutions that help businesses simplify complex operations, automate workflows, and grow through technology.', category: 'general', category_display: 'General', display_order: 1 },
  { id: 2, question: 'What are the company\'s two primary business areas?', answer: 'We have two core focuses: developing our own software products (such as CardFlow, PrintFlow, and EazeFlow) and engineering custom software, web platforms, mobile apps, and AI solutions for client organizations.', category: 'general', category_display: 'General', display_order: 2 },
  { id: 3, question: 'Does KDR Softwares work with businesses of different sizes?', answer: 'Yes. We work with commercial agencies, growing companies, and established enterprises that require dependable software engineered around real business processes.', category: 'general', category_display: 'General', display_order: 3 },
  { id: 4, question: 'Where is KDR Softwares located?', answer: 'KDR Softwares is based in Navlakha, Indore, Madhya Pradesh, India.', category: 'general', category_display: 'General', display_order: 4 },
  { id: 5, question: 'What is CardFlow?', answer: 'CardFlow is an ID-card data management and production workflow platform designed specifically for commercial ID-card printing agencies to manage institutions, extract data, verify records, and coordinate production.', category: 'products', category_display: 'Products', display_order: 5 },
  { id: 6, question: 'Does CardFlow design and print the physical ID cards directly?', answer: 'CardFlow currently manages the critical data intake, verification, photo matching, and production export workflows. Printing agencies use CorelDRAW or their preferred design software for physical layout and printing. Direct design interpretation and automated print-ready rendering via PrintFlow are actively on our development roadmap.', category: 'products', category_display: 'Products', display_order: 6 },
  { id: 7, question: 'What is PrintFlow?', answer: 'PrintFlow is an independently hosted ID-card design and printing automation product. It is engineered to automate template parsing, sheet imposition, and batch generation, and can also integrate with CardFlow.', category: 'products', category_display: 'Products', display_order: 7 },
  { id: 8, question: 'What is EazeFlow?', answer: 'EazeFlow is a digital productivity and document utility product designed to automate routine document transformations, data sanitization, and batch file conversions.', category: 'products', category_display: 'Products', display_order: 8 },
  { id: 9, question: 'What custom software development services do you offer?', answer: 'We engineer custom business management software, workflow automation engines, custom dashboards, enterprise ERP modules, and tailor-made database applications.', category: 'services', category_display: 'Services', display_order: 9 },
  { id: 10, question: 'What technologies do you use for web and mobile development?', answer: 'Our primary stack includes modern React, TypeScript, Tailwind CSS, Python, Django REST Framework, and PostgreSQL, along with Android mobile development.', category: 'services', category_display: 'Services', display_order: 10 },
  { id: 11, question: 'What AI solutions do you provide?', answer: 'We specialize in pragmatic AI solutions: Intelligent Document Processing (IDP), OCR data extraction, computer vision photo matching, and automated workflow pipelines.', category: 'services', category_display: 'Services', display_order: 11 },
  { id: 12, question: 'How can I request a quotation for custom software?', answer: 'You can submit an enquiry via our Contact page or email contact@kdrsoftwares.in with your project requirements. We will analyze your scope and schedule an architectural discussion.', category: 'services', category_display: 'Services', display_order: 12 },
  { id: 13, question: 'How can I contact KDR Softwares for technical support?', answer: 'Existing clients and product users can reach our technical support team directly at support@kdrsoftwares.in.', category: 'support', category_display: 'Support & Maintenance', display_order: 13 },
  { id: 14, question: 'Does KDR Softwares provide ongoing software maintenance?', answer: 'Yes. All custom software and enterprise product engagements include structured maintenance options, performance monitoring, and updates.', category: 'support', category_display: 'Support & Maintenance', display_order: 14 },
];

export const FALLBACK_PORTFOLIO: PortfolioProject[] = [
  {
    id: 1,
    title: 'CardFlow — ID Card Production Management Platform',
    slug: 'cardflow-platform',
    category: 'Software Product',
    client_or_context: 'Commercial Print Agency Production Workflow',
    short_summary: 'A specialized enterprise workflow system handling multi-institution ID data, bulk photo matching, and approval cycles.',
    detailed_description: 'Commercial ID card printing agencies routinely handle hundreds of educational institutions, each with completely different Excel sheets, unmatched photo folders, and strict delivery deadlines. CardFlow centralizes this entire operational pipeline. Over 100,000 real production ID records have been managed through CardFlow\'s multi-stage verification workflows, photo extraction algorithms, and CorelDRAW export utilities.',
    technologies: 'React, Django REST Framework, PostgreSQL, Tailwind CSS, Python, Android SDK',
    tech_list: ['React', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS', 'Python', 'Android SDK'],
    cover_image: null,
    project_url: '/products/cardflow',
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'PrintFlow — Automated ID Imposition Engine',
    slug: 'printflow-engine',
    category: 'Automation Engine',
    client_or_context: 'Independent ID Printing Automation Product',
    short_summary: 'High-speed template layout generation and print batch imposition engine.',
    detailed_description: 'PrintFlow addresses the physical pre-press bottleneck by taking structured records and programmatically placing them onto printer-ready sheet layouts with precision barcodes and registration marks. Designed as an independent engine that pairs with CardFlow.',
    technologies: 'Python, Vector Graphics Processing, REST APIs, Microservices',
    tech_list: ['Python', 'Vector Graphics Processing', 'REST APIs', 'Microservices'],
    cover_image: null,
    project_url: '/products/printflow',
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'EazeFlow — Business Document Utility',
    slug: 'eazeflow-utility',
    category: 'Productivity Utility',
    client_or_context: 'Corporate Document Normalization & Sanitization',
    short_summary: 'A lightweight digital utility for high-volume document standardization and batch file conversion.',
    detailed_description: 'Built to solve recurring clerical inefficiencies when ingesting dirty Excel spreadsheets and unformatted Word documents. EazeFlow cleanses, normalizes, and extracts structured datasets with zero cloud data retention for maximum privacy.',
    technologies: 'TypeScript, Electron, Node.js, Python Parser',
    tech_list: ['TypeScript', 'Electron', 'Node.js', 'Python Parser'],
    cover_image: null,
    project_url: '/products/eazeflow',
    is_featured: true,
    display_order: 3,
    created_at: new Date().toISOString(),
  }
];

export const FALLBACK_PRICING: PricingPlan[] = [
  {
    id: 1,
    product: 1,
    product_name: 'CardFlow',
    name: 'CardFlow Agency Production Tier',
    price: 'Custom Agency Quote',
    billing_period: 'per production season / annual',
    description: 'Designed for commercial ID card printing agencies managing multiple schools, colleges, and enterprise rosters.',
    features: 'Multiple institution client workspaces\nDynamic table & custom field configurations\nExcel and Word data imports\nEmbedded photo extraction engine\nAutomated bulk photo matching\nMulti-stage verification and approval portal\nReprint and audit tracking\nExport bundles for CorelDRAW, Excel, and Word\nAndroid companion app support',
    feature_list: [
      'Multiple institution client workspaces',
      'Dynamic table & custom field configurations',
      'Excel and Word data imports',
      'Embedded photo extraction engine',
      'Automated bulk photo matching',
      'Multi-stage verification and approval portal',
      'Reprint and audit tracking',
      'Export bundles for CorelDRAW, Excel, and Word',
      'Android companion app support'
    ],
    cta_text: 'Enquire for CardFlow',
    cta_url: '/contact',
    is_featured: true,
    display_order: 1,
  },
  {
    id: 2,
    product: null,
    product_name: null,
    name: 'Custom Software Development',
    price: 'Milestone Quotation',
    billing_period: 'milestone-based delivery',
    description: 'Tailor-made software systems, automated workflow engines, and enterprise web or mobile applications built to your exact specifications.',
    features: 'Detailed requirements analysis & architectural blueprint\nTailored full-stack implementation (React + Django + PostgreSQL)\nFull source code ownership with no per-user fees\nRole-based access control and security hardening\nAPI integration with your existing legacy systems\nDedicated QA testing and production deployment\nStructured post-launch warranty and support',
    feature_list: [
      'Detailed requirements analysis & architectural blueprint',
      'Tailored full-stack implementation (React + Django + PostgreSQL)',
      'Full source code ownership with no per-user fees',
      'Role-based access control and security hardening',
      'API integration with your existing legacy systems',
      'Dedicated QA testing and production deployment',
      'Structured post-launch warranty and support'
    ],
    cta_text: 'Request Custom Proposal',
    cta_url: '/contact',
    is_featured: false,
    display_order: 2,
  }
];

// API Functions with Graceful Offline Resilience
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await apiClient.get<SiteSettings>('/site-settings/');
    return res.data;
  } catch (error) {
    console.warn('Backend unavailable, using fallback settings');
    return FALLBACK_SETTINGS;
  }
}

export async function getStatistics(): Promise<Statistic[]> {
  try {
    const res = await apiClient.get<Statistic[]>('/statistics/');
    return res.data.length ? res.data : FALLBACK_STATS;
  } catch (error) {
    return FALLBACK_STATS;
  }
}

export async function getTrustedClients(): Promise<TrustedClientCard[]> {
  try {
    const res = await apiClient.get<TrustedClientCard[]>('/trusted-clients/');
    return res.data.length ? res.data : FALLBACK_TRUSTED_CLIENTS;
  } catch (error) {
    return FALLBACK_TRUSTED_CLIENTS;
  }
}

export async function addTrustedClient(payload: Partial<TrustedClientCard>): Promise<{ success: boolean; data?: TrustedClientCard }> {
  try {
    const res = await apiClient.post<{ success: boolean; data: TrustedClientCard }>('/trusted-clients/', payload);
    return res.data;
  } catch (error) {
    console.error('Failed to add trusted client card:', error);
    throw error;
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await apiClient.get<Product[]>('/products/');
    return res.data.length ? res.data : FALLBACK_PRODUCTS;
  } catch (error) {
    return FALLBACK_PRODUCTS;
  }
}

export async function getProduct(slug: string): Promise<Product> {
  try {
    const res = await apiClient.get<Product>(`/products/${slug}/`);
    return res.data;
  } catch (error) {
    const found = FALLBACK_PRODUCTS.find((p) => p.slug === slug);
    if (!found) throw new Error('Product not found');
    return found;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const res = await apiClient.get<Service[]>('/services/');
    return res.data.length ? res.data : FALLBACK_SERVICES;
  } catch (error) {
    return FALLBACK_SERVICES;
  }
}

export async function getService(slug: string): Promise<Service> {
  try {
    const res = await apiClient.get<Service>(`/services/${slug}/`);
    return res.data;
  } catch (error) {
    const found = FALLBACK_SERVICES.find((s) => s.slug === slug);
    if (!found) throw new Error('Service not found');
    return found;
  }
}

export async function getPortfolio(): Promise<PortfolioProject[]> {
  try {
    const res = await apiClient.get<PortfolioProject[]>('/portfolio/');
    return res.data.length ? res.data : FALLBACK_PORTFOLIO;
  } catch (error) {
    return FALLBACK_PORTFOLIO;
  }
}

export async function getPortfolioProject(slug: string): Promise<PortfolioProject> {
  try {
    const res = await apiClient.get<PortfolioProject>(`/portfolio/${slug}/`);
    return res.data;
  } catch (error) {
    const found = FALLBACK_PORTFOLIO.find((p) => p.slug === slug);
    if (!found) throw new Error('Portfolio project not found');
    return found;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await apiClient.get<Testimonial[]>('/testimonials/');
    return res.data.length ? res.data : FALLBACK_TESTIMONIALS;
  } catch (error) {
    return FALLBACK_TESTIMONIALS;
  }
}

export async function getFaqs(category?: string): Promise<FAQ[]> {
  try {
    const url = category ? `/faqs/?category=${category}` : '/faqs/';
    const res = await apiClient.get<FAQ[]>(url);
    return res.data.length ? res.data : FALLBACK_FAQS;
  } catch (error) {
    return category ? FALLBACK_FAQS.filter((f) => f.category === category) : FALLBACK_FAQS;
  }
}

export async function getPricingPlans(productSlug?: string): Promise<PricingPlan[]> {
  try {
    const url = productSlug ? `/pricing/?product_slug=${productSlug}` : '/pricing/';
    const res = await apiClient.get<PricingPlan[]>(url);
    return res.data.length ? res.data : FALLBACK_PRICING;
  } catch (error) {
    return FALLBACK_PRICING;
  }
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const res = await apiClient.post<EnquiryResponse>('/enquiries/', payload);
  return res.data;
}

