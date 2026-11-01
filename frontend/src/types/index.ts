export interface SiteSettings {
  company_name: string;
  tagline: string;
  hero_headline: string;
  hero_subheadline: string;
  hero_video_url?: string;
  footer_description: string;
  general_email: string;
  support_email: string;
  location_text: string;
  map_embed_url: string;
  social_linkedin: string;
  social_twitter: string;
  social_github: string;
  social_youtube: string;
  meta_title: string;
  meta_description: string;
  updated_at: string;
}

export interface TrustedClientCard {
  id: number;
  name: string;
  category: string;
  tag: string;
  summary: string;
  image: string | null;
  image_url?: string;
  link_url: string;
  display_order: number;
}

export interface Statistic {
  id: number;
  label: string;
  value: string;
  suffix: string;
  description: string;
  display_order: number;
}

export interface ProductFeature {
  id: number;
  title: string;
  description: string;
  icon_name: string;
  is_roadmap: boolean;
  display_order: number;
}

export interface ProductScreenshot {
  id: number;
  caption: string;
  image: string;
  display_order: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  full_description?: string;
  status: 'active' | 'mvp' | 'in_development';
  product_url: string;
  logo: string | null;
  cover_image: string | null;
  accent_color: string;
  is_featured: boolean;
  display_order: number;
  features: ProductFeature[];
  screenshots?: ProductScreenshot[];
}

export interface ServiceBenefit {
  id: number;
  title: string;
  description: string;
  display_order: number;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  full_description: string;
  icon_name: string;
  cover_image: string | null;
  display_order: number;
  is_active: boolean;
  benefits: ServiceBenefit[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  slug: string;
  category: string;
  client_or_context: string;
  short_summary: string;
  detailed_description: string;
  technologies: string;
  tech_list: string[];
  cover_image: string | null;
  project_url: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
}

export interface Testimonial {
  id: number;
  customer_name: string;
  designation: string;
  company: string;
  testimonial_text: string;
  image: string | null;
  related_product: number | null;
  product_name: string | null;
  display_order: number;
  created_at: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'products' | 'services' | 'support';
  category_display: string;
  display_order: number;
}

export interface PricingPlan {
  id: number;
  product: number | null;
  product_name: string | null;
  name: string;
  price: string;
  billing_period: string;
  description: string;
  features: string;
  feature_list: string[];
  cta_text: string;
  cta_url: string;
  is_featured: boolean;
  display_order: number;
}

export interface EnquiryPayload {
  full_name: string;
  company_name: string;
  email: string;
  phone?: string;
  enquiry_type: string;
  subject: string;
  message: string;
  website_url_hp?: string; // honeypot field
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  id?: number;
  errors?: Record<string, string[]>;
}

