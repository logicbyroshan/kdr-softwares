from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialListView(generics.ListAPIView):
    """
    Public API returning approved and published customer testimonials only.
    """
    queryset = Testimonial.objects.filter(is_published=True).order_by('display_order', '-created_at')
    serializer_class = TestimonialSerializer
