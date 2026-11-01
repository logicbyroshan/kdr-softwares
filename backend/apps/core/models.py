from django.db import models


class SiteSettings(models.Model):
    company_name = models.CharField(max_length=150, default="KDR Softwares")
    tagline = models.CharField(max_length=255, default="Software Products & Custom Technology Solutions")
    hero_headline = models.CharField(
        max_length=255, 
        default="We turn complex operations into powerful digital solutions."
    )
    hero_subheadline = models.TextField(
        default="From innovative software products to custom-built technology, we help businesses simplify operations, work smarter and grow through technology."
    )
    footer_description = models.TextField(
        default="KDR Softwares develops practical software products and custom technology solutions that empower organizations to automate workflows and scale with confidence."
    )
    general_email = models.EmailField(default="contact@kdrsoftwares.in")
    support_email = models.EmailField(default="support@kdrsoftwares.in")
    location_text = models.CharField(max_length=255, default="Navlakha, Indore, Madhya Pradesh, India")
    map_embed_url = models.TextField(
        default="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.364964673898!2d75.8711467!3d22.6974786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd27dbbc1c79%3A0xe5f9be8f9b98ff30!2sNavlakha%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        help_text="Google Maps Embed URL for Navlakha, Indore"
    )
    social_linkedin = models.URLField(blank=True, default="https://linkedin.com/company/kdrsoftwares")
    social_twitter = models.URLField(blank=True, default="https://x.com/kdrsoftwares")
    social_github = models.URLField(blank=True, default="https://github.com/kdrsoftwares")
    social_youtube = models.URLField(blank=True, default="https://youtube.com/@kdrsoftwares")
    
    meta_title = models.CharField(
        max_length=255, 
        default="KDR Softwares — Software Products & Custom Technology Solutions"
    )
    meta_description = models.TextField(
        default="KDR Softwares develops practical software products like CardFlow and provides high-performance custom software, web, mobile, and AI solutions for businesses."
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Site Setting"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return f"{self.company_name} Configuration"

    def save(self, *args, **kwargs):
        # Guarantee singleton pattern
        self.pk = 1
        super().save(*args, **kwargs)


class Statistic(models.Model):
    label = models.CharField(max_length=120)
    value = models.CharField(max_length=60, help_text="e.g. 100,000+ or 3 or 99.9%")
    suffix = models.CharField(max_length=30, blank=True, help_text="e.g. Cards or Products")
    description = models.CharField(
        max_length=255, 
        help_text="Accurate, non-exaggerated description of what this metric represents"
    )
    display_order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = "Impact Statistic"
        verbose_name_plural = "Impact Statistics"

    def __str__(self):
        return f"{self.label}: {self.value} {self.suffix}"
