from django.db import models


class Enquiry(models.Model):
    ENQUIRY_TYPES = [
        ('general', 'General Enquiry'),
        ('custom_software', 'Custom Software Development'),
        ('web_development', 'Web Development'),
        ('mobile_apps', 'Mobile Application Development'),
        ('ai_solutions', 'AI Solutions'),
        ('product', 'Product Enquiry (CardFlow / PrintFlow / EazeFlow)'),
        ('partnership', 'Partnership'),
        ('other', 'Other'),
    ]

    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_review', 'In Review'),
        ('contacted', 'Contacted'),
        ('closed', 'Closed'),
    ]

    full_name = models.CharField(max_length=120)
    company_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    enquiry_type = models.CharField(max_length=50, choices=ENQUIRY_TYPES, default='general')
    subject = models.CharField(max_length=200)
    message = models.TextField()
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='new')
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    admin_notes = models.TextField(blank=True, help_text="Internal notes for KDR Softwares team")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Enquiry"
        verbose_name_plural = "Contact Enquiries"

    def __str__(self):
        return f"{self.full_name} ({self.company_name}) - {self.get_enquiry_type_display()}"
