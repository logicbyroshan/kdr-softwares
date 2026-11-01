from django.db import models


class Product(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active Product'),
        ('mvp', 'MVP / Production Testing'),
        ('in_development', 'In Development'),
    ]

    name = models.CharField(max_length=120)
    slug = models.SlugField(max_length=120, unique=True)
    tagline = models.CharField(max_length=255)
    short_description = models.TextField(help_text="Concise 1-2 sentence overview for cards and hero previews")
    full_description = models.TextField(help_text="Detailed product narrative and architecture explanation")
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='active')
    product_url = models.URLField(blank=True, help_text="Dedicated product website or portal link (e.g. CardFlow standalone page)")
    logo = models.ImageField(upload_to='products/logos/', blank=True, null=True)
    cover_image = models.ImageField(upload_to='products/covers/', blank=True, null=True)
    accent_color = models.CharField(max_length=30, default='#2563EB', help_text="Hex code for product visual theme")
    is_featured = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name


class ProductFeature(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='features')
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon_name = models.CharField(
        max_length=60, 
        default='Layers', 
        help_text="Lucide icon name (e.g. Database, FileSpreadsheet, ScanFace, ShieldCheck, Layers, FileCheck, Smartphone, Printer)"
    )
    is_roadmap = models.BooleanField(
        default=False, 
        help_text="Mark True for planned capabilities on the roadmap (e.g. intelligent PDF interpretation). DO NOT present as available now."
    )
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Product Feature"
        verbose_name_plural = "Product Features"

    def __str__(self):
        roadmap_tag = " [Roadmap]" if self.is_roadmap else ""
        return f"{self.product.name} - {self.title}{roadmap_tag}"


class ProductScreenshot(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='screenshots')
    caption = models.CharField(max_length=200)
    image = models.ImageField(upload_to='products/screenshots/', blank=True, null=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Product Screenshot"
        verbose_name_plural = "Product Screenshots"

    def __str__(self):
        return f"{self.product.name} - {self.caption}"
