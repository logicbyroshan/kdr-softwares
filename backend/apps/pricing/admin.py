from django.contrib import admin
from .models import PricingPlan


@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'product', 'price', 'billing_period', 'is_featured', 'display_order', 'is_published')
    list_editable = ('price', 'is_featured', 'display_order', 'is_published')
    list_filter = ('product', 'is_featured', 'is_published')
    search_fields = ('name', 'description')
