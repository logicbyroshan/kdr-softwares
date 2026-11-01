from django.db import models


class PricingPlan(models.Model):
    product = models.ForeignKey(
        'products.Product', 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True, 
        related_name='pricing_plans',
        help_text="Associated product. Leave empty if general custom service tier."
    )
    name = models.CharField(max_length=120, help_text="e.g. CardFlow Production Tier, Custom Project Assessment")
    price = models.CharField(max_length=80, help_text="e.g. ₹9,999 or By Quotation or Flexible Milestone")
    billing_period = models.CharField(max_length=80, default="per project / milestone", help_text="e.g. per production cycle, annually, milestone-based")
    description = models.TextField(help_text="Who this tier or pricing scope is designed for")
    features = models.TextField(
        help_text="One feature per line, or JSON formatted array of feature strings"
    )
    cta_text = models.CharField(max_length=60, default="Request Quotation")
    cta_url = models.CharField(max_length=255, default="/contact", help_text="Internal route or external link")
    is_featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Pricing Plan"
        verbose_name_plural = "Pricing Plans"

    def __str__(self):
        target = self.product.name if self.product else "Custom Service"
        return f"{target} — {self.name} ({self.price})"
