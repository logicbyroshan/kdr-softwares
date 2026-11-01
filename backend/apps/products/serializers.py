from rest_framework import serializers
from .models import Product, ProductFeature, ProductScreenshot


class ProductFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFeature
        fields = [
            'id',
            'title',
            'description',
            'icon_name',
            'is_roadmap',
            'display_order',
        ]


class ProductScreenshotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductScreenshot
        fields = [
            'id',
            'caption',
            'image',
            'display_order',
        ]


class ProductListSerializer(serializers.ModelSerializer):
    features = ProductFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'tagline',
            'short_description',
            'status',
            'product_url',
            'logo',
            'cover_image',
            'accent_color',
            'is_featured',
            'display_order',
            'features',
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    features = ProductFeatureSerializer(many=True, read_only=True)
    screenshots = ProductScreenshotSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'tagline',
            'short_description',
            'full_description',
            'status',
            'product_url',
            'logo',
            'cover_image',
            'accent_color',
            'is_featured',
            'display_order',
            'features',
            'screenshots',
            'created_at',
            'updated_at',
        ]

