from rest_framework import serializers
from .models import Service, ServiceBenefit


class ServiceBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceBenefit
        fields = [
            'id',
            'title',
            'description',
            'display_order',
        ]


class ServiceSerializer(serializers.ModelSerializer):
    benefits = ServiceBenefitSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = [
            'id',
            'name',
            'slug',
            'short_description',
            'full_description',
            'icon_name',
            'cover_image',
            'display_order',
            'is_active',
            'benefits',
            'created_at',
        ]
