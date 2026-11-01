from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SiteSettings, Statistic, TrustedClient
from .serializers import SiteSettingsSerializer, StatisticSerializer, TrustedClientSerializer


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


class TrustedClientListView(generics.ListCreateAPIView):
    """
    Public API returning published trusted client cards.
    Supports POST for adding new partner/client cards.
    """
    serializer_class = TrustedClientSerializer

    def get_queryset(self):
        return TrustedClient.objects.filter(is_published=True).order_by('display_order', 'id')

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                "success": True,
                "message": "Client card added successfully.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )
