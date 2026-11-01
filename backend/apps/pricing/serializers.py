from rest_framework import serializers
from .models import PricingPlan


class PricingPlanSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='product.name')
    feature_list = serializers.SerializerMethodField()

    class Meta:
        model = PricingPlan
        fields = [
            'id',
            'product',
            'product_name',
            'name',
            'price',
            'billing_period',
            'description',
            'features',
            'feature_list',
            'cta_text',
            'cta_url',
            'is_featured',
            'display_order',
        ]

    def get_feature_list(self, obj):
        if not obj.features:
            return []
        return [f.strip() for f in obj.features.split('\n') if f.strip()]

