from rest_framework import serializers
from .models import PortfolioProject


class PortfolioProjectSerializer(serializers.ModelSerializer):
    tech_list = serializers.SerializerMethodField()

    class Meta:
        model = PortfolioProject
        fields = [
            'id',
            'title',
            'slug',
            'category',
            'client_or_context',
            'short_summary',
            'detailed_description',
            'technologies',
            'tech_list',
            'cover_image',
            'project_url',
            'is_featured',
            'display_order',
            'created_at',
        ]

    def get_tech_list(self, obj):
        if not obj.technologies:
            return []
        return [t.strip() for t in obj.technologies.split(',') if t.strip()]
