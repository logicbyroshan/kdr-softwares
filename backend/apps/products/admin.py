from django.contrib import admin
from .models import Product, ProductFeature, ProductScreenshot


class ProductFeatureInline(admin.TabularInline):
    model = ProductFeature
    extra = 1
    fields = ('title', 'icon_name', 'is_roadmap', 'display_order', 'description')


class ProductScreenshotInline(admin.TabularInline):
    model = ProductScreenshot
    extra = 1
    fields = ('caption', 'image', 'display_order')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'is_featured', 'display_order', 'updated_at')
    list_editable = ('status', 'is_featured', 'display_order')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'tagline', 'short_description')
    list_filter = ('status', 'is_featured')
    inlines = [ProductFeatureInline, ProductScreenshotInline]
