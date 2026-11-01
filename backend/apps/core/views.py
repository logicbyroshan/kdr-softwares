from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SiteSettings, Statistic
from .serializers import SiteSettingsSerializer, StatisticSerializer


class SiteSettingsView(APIView):
    """
    Public API to fetch active site settings and company metadata.
    """
    def get(self, request, *args, **kwargs):
        settings_obj, _ = SiteSettings.objects.get_or_create(pk=1)
        serializer = SiteSettingsSerializer(settings_obj)
        return Response(serializer.data)


class StatisticListView(generics.ListAPIView):
    """
    Public API returning published impact statistics.
    """
    queryset = Statistic.objects.filter(is_published=True).order_by('display_order', 'id')
    serializer_class = StatisticSerializer
