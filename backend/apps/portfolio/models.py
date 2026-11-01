from django.db import models


class PortfolioProject(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(max_length=150, unique=True)
    category = models.CharField(max_length=100, help_text="e.g. Software Product, Web Platform, Mobile App, Automation")
    client_or_context = models.CharField(
        max_length=150, 
        default="Commercial Production / In-house Product",
        help_text="Context of the project (e.g. ID Card Printing Industry, Internal Product)"
    )
    short_summary = models.TextField(help_text="Key highlights, purpose, and impact")
    detailed_description = models.TextField(help_text="Detailed architecture, challenges solved, and operational outcome")
    technologies = models.CharField(max_length=255, help_text="Comma-separated technologies (e.g. React, Django, PostgreSQL, Android, Tailwind CSS)")
    cover_image = models.ImageField(upload_to='portfolio/covers/', blank=True, null=True)
    project_url = models.URLField(blank=True, help_text="Live URL or dedicated link")
    is_featured = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    published_status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']
        verbose_name = "Portfolio Project"
        verbose_name_plural = "Portfolio Projects"

    def __str__(self):
        return f"{self.title} ({self.category})"
