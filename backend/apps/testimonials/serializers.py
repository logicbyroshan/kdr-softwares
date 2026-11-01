from rest_framework import serializers
from .models import Testimonial


class TestimonialSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='related_product.name')

    class Meta:
        model = Testimonial
        fields = [
            'id',
            'customer_name',
            'designation',
            'company',
            'testimonial_text',
            'image',
            'related_product',
            'product_name',
            'display_order',
            'created_at',
        ]

