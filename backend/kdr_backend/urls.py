"""
URL configuration for KDR Softwares corporate backend.
Provides versioned /api/v1/ endpoints and standard Django Admin.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# App views
from apps.core.views import SiteSettingsView, StatisticListView, TrustedClientListView
from apps.products.views import ProductListView, ProductDetailView
from apps.services.views import ServiceListView, ServiceDetailView
from apps.portfolio.views import PortfolioListView, PortfolioDetailView
from apps.testimonials.views import TestimonialListView
from apps.faqs.views import FAQListView
from apps.pricing.views import PricingPlanListView
from apps.enquiries.views import EnquiryCreateView

api_v1_patterns = [
    path('site-settings/', SiteSettingsView.as_view(), name='api-site-settings'),
    path('statistics/', StatisticListView.as_view(), name='api-statistics'),
    path('trusted-clients/', TrustedClientListView.as_view(), name='api-trusted-clients'),
    path('products/', ProductListView.as_view(), name='api-products-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='api-products-detail'),
    path('services/', ServiceListView.as_view(), name='api-services-list'),
    path('services/<slug:slug>/', ServiceDetailView.as_view(), name='api-services-detail'),
    path('portfolio/', PortfolioListView.as_view(), name='api-portfolio-list'),
    path('portfolio/<slug:slug>/', PortfolioDetailView.as_view(), name='api-portfolio-detail'),
    path('testimonials/', TestimonialListView.as_view(), name='api-testimonials-list'),
    path('faqs/', FAQListView.as_view(), name='api-faqs-list'),
    path('pricing/', PricingPlanListView.as_view(), name='api-pricing-list'),
    path('enquiries/', EnquiryCreateView.as_view(), name='api-enquiries-create'),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_v1_patterns)),
]

# Media and Static serving in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Customize Admin Site Branding
admin.site.site_header = "KDR Softwares Administration"
admin.site.site_title = "KDR Admin Portal"
admin.site.index_title = "Corporate Operations & CMS"
