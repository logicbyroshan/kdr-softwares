from rest_framework import generics
from .models import FAQ
from .serializers import FAQSerializer


class FAQListView(generics.ListAPIView):
    """
    Public API returning published FAQs grouped/ordered by category and display order.
    Supports filtering by category: ?category=products
    """
    serializer_class = FAQSerializer

    def get_queryset(self):
        qs = FAQ.objects.filter(is_published=True).order_by('category', 'display_order', 'id')
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs
