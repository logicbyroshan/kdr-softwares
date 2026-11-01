from django.contrib import admin
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'company_name', 'email', 'enquiry_type', 'status', 'created_at')
    list_filter = ('status', 'enquiry_type', 'created_at')
    search_fields = ('full_name', 'company_name', 'email', 'subject', 'message')
    readonly_fields = ('full_name', 'company_name', 'email', 'phone', 'enquiry_type', 'subject', 'message', 'ip_address', 'created_at', 'updated_at')
    fieldsets = (
        ("Enquiry Details (Read-only)", {
            "fields": ('full_name', 'company_name', 'email', 'phone', 'enquiry_type', 'subject', 'message', 'ip_address', 'created_at')
        }),
        ("Management & Follow-up", {
            "fields": ('status', 'admin_notes')
        }),
    )

    def has_add_permission(self, request):
        return False
