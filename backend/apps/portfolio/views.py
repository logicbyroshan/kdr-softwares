from rest_framework import generics
from .models import PortfolioProject
from .serializers import PortfolioProjectSerializer


class PortfolioListView(generics.ListAPIView):
    queryset = PortfolioProject.objects.filter(published_status=True).order_by('display_order', '-created_at')
    serializer_class = PortfolioProjectSerializer


class PortfolioDetailView(generics.RetrieveAPIView):
    queryset = PortfolioProject.objects.filter(published_status=True)
    serializer_class = PortfolioProjectSerializer
    lookup_field = 'slug'
