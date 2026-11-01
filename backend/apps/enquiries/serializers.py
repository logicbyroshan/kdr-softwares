from rest_framework import serializers
from .models import Enquiry


class EnquiryCreateSerializer(serializers.ModelSerializer):
    # Honeypot field for simple automated bot spam detection
    website_url_hp = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = Enquiry
        fields = [
            'full_name',
            'company_name',
            'email',
            'phone',
            'enquiry_type',
            'subject',
            'message',
            'website_url_hp',
        ]

    def validate(self, attrs):
        hp = attrs.pop('website_url_hp', '')
        if hp:
            raise serializers.ValidationError("Bot submission detected.")
        if len(attrs.get('message', '')) < 10:
            raise serializers.ValidationError({"message": "Please provide a detailed description (at least 10 characters)."})
        return attrs


class EnquiryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = [
            'id',
            'full_name',
            'company_name',
            'email',
            'phone',
            'enquiry_type',
            'subject',
            'message',
            'status',
            'created_at',
        ]
        read_only_fields = fields

