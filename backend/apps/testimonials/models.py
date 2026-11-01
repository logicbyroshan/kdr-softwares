from django.db import models


class Testimonial(models.Model):
    customer_name = models.CharField(max_length=120)
    designation = models.CharField(max_length=150, help_text="e.g. Operations Lead / Print Agency Director")
    company = models.CharField(max_length=150, help_text="Commercial ID Card & Production Agency")
    testimonial_text = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    related_product = models.ForeignKey(
        'products.Product', 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True, 
        related_name='testimonials'
    )
    display_order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(
        default=True, 
        help_text="Uncheck to hide testimonials from public display without deleting"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return f"{self.customer_name} ({self.company})"
