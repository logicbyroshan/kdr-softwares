from django.db import models


class FAQ(models.Model):
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('products', 'Products'),
        ('services', 'Services'),
        ('support', 'Support & Maintenance'),
    ]

    question = models.CharField(max_length=255)
    answer = models.TextField()
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES, default='general')
    display_order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'display_order', 'id']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return f"[{self.get_category_display()}] {self.question}"
