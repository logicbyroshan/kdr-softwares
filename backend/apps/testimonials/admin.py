from django.contrib import admin
from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'company', 'designation', 'related_product', 'is_published', 'display_order', 'created_at')
    list_editable = ('is_published', 'display_order')
    search_fields = ('customer_name', 'company', 'testimonial_text')
    list_filter = ('is_published', 'related_product')
