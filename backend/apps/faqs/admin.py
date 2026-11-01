from django.contrib import admin
from .models import FAQ


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'display_order', 'is_published')
    list_editable = ('category', 'display_order', 'is_published')
    list_filter = ('category', 'is_published')
    search_fields = ('question', 'answer')
