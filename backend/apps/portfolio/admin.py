from django.contrib import admin
from .models import PortfolioProject


@admin.register(PortfolioProject)
class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_featured', 'display_order', 'published_status', 'created_at')
    list_editable = ('is_featured', 'display_order', 'published_status')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'short_summary', 'technologies')
    list_filter = ('category', 'is_featured', 'published_status')
