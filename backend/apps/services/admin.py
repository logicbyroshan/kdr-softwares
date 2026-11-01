from django.contrib import admin
from .models import Service, ServiceBenefit


class ServiceBenefitInline(admin.TabularInline):
    model = ServiceBenefit
    extra = 1
    fields = ('title', 'description', 'display_order')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon_name', 'is_active', 'display_order', 'created_at')
    list_editable = ('is_active', 'display_order')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'short_description')
    list_filter = ('is_active',)
    inlines = [ServiceBenefitInline]
