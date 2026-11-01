from rest_framework import generics
from .models import Product
from .serializers import ProductListSerializer, ProductDetailSerializer


class ProductListView(generics.ListAPIView):
    """
    Returns list of all active products ordered by display_order.
    """
    queryset = Product.objects.all().order_by('display_order', 'id')
    serializer_class = ProductListSerializer


class ProductDetailView(generics.RetrieveAPIView):
    """
    Returns complete product specification, features, roadmap status, and screenshots by slug.
    """
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'
