from rest_framework import serializers
from .models import SiteSettings, Statistic, TrustedClient


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = [
            'company_name',
            'tagline',
            'hero_headline',
            'hero_subheadline',
            'hero_video_url',
            'footer_description',
            'general_email',
            'support_email',
            'location_text',
            'map_embed_url',
            'social_linkedin',
            'social_twitter',
            'social_github',
            'social_youtube',
            'meta_title',
            'meta_description',
            'updated_at',
        ]


class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = [
            'id',
            'label',
            'value',
            'suffix',
            'description',
            'display_order',
        ]


class TrustedClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrustedClient
        fields = [
            'id',
            'name',
            'category',
            'tag',
            'summary',
            'image',
            'image_url',
            'link_url',
            'display_order',
        ]
