from django.contrib import admin
from .models import SiteSettings, Statistic, TrustedClient


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Company Profile", {
            "fields": ("company_name", "tagline", "general_email", "support_email", "location_text", "map_embed_url")
        }),
        ("Hero Section Video & Copy", {
            "fields": ("hero_headline", "hero_subheadline", "hero_video_url")
        }),
        ("Footer & Narrative", {
            "fields": ("footer_description",)
        }),
        ("Social Links", {
            "fields": ("social_linkedin", "social_twitter", "social_github", "social_youtube")
        }),
        ("SEO Meta Defaults", {
            "fields": ("meta_title", "meta_description")
        }),
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(Statistic)
class StatisticAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'suffix', 'display_order', 'is_published')
    list_editable = ('display_order', 'is_published')
    search_fields = ('label', 'description')


@admin.register(TrustedClient)
class TrustedClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'tag', 'display_order', 'is_published')
    list_editable = ('category', 'display_order', 'is_published')
    search_fields = ('name', 'category', 'summary', 'tag')
    list_filter = ('category', 'is_published')
