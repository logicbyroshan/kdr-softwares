from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(max_length=150, unique=True)
    short_description = models.TextField(help_text="Short executive summary for the homepage grid and cards")
    full_description = models.TextField(help_text="In-depth service overview, technical approach, and methodologies")
    icon_name = models.CharField(
        max_length=60, 
        default='Code2', 
        help_text="Lucide icon identifier (e.g. Code2, Globe, Smartphone, Sparkles)"
    )
    cover_image = models.ImageField(upload_to='services/covers/', blank=True, null=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def __str__(self):
        return self.name


class ServiceBenefit(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='benefits')
    title = models.CharField(max_length=150)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Service Benefit"
        verbose_name_plural = "Service Benefits"

    def __str__(self):
        return f"{self.service.name} - {self.title}"
