import logging
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import AnonRateThrottle
from .models import Enquiry
from .serializers import EnquiryCreateSerializer

logger = logging.getLogger(__name__)


class EnquiryRateThrottle(AnonRateThrottle):
    rate = '10/hour'


class EnquiryCreateView(APIView):
    """
    Public API to submit a contact/project enquiry.
    Includes spam protection, rate limiting, and email notifications.
    """
    throttle_classes = [EnquiryRateThrottle]

    def post(self, request, *args, **kwargs):
        serializer = EnquiryCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"errors": serializer.errors, "message": "Validation failed. Please correct the fields."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Extract client IP
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')

        enquiry = serializer.save(ip_address=ip)

        # Trigger notification email safely
        self._send_notifications(enquiry)

        return Response(
            {
                "success": True,
                "message": "Thank you for reaching out to KDR Softwares. Your enquiry has been received and our team will review it promptly.",
                "id": enquiry.id
            },
            status=status.HTTP_201_CREATED
        )

    def _send_notifications(self, enquiry):
        # Internal Notification
        try:
            subject = f"[New KDR Enquiry] {enquiry.get_enquiry_type_display()} - {enquiry.company_name}"
            body = (
                f"New project enquiry received on KDR Softwares website:\n\n"
                f"Full Name: {enquiry.full_name}\n"
                f"Company: {enquiry.company_name}\n"
                f"Email: {enquiry.email}\n"
                f"Phone: {enquiry.phone or 'Not provided'}\n"
                f"Enquiry Type: {enquiry.get_enquiry_type_display()}\n"
                f"Subject: {enquiry.subject}\n\n"
                f"Message:\n{enquiry.message}\n\n"
                f"Submitted At: {enquiry.created_at}\n"
                f"Client IP: {enquiry.ip_address}\n"
            )
            recipient = getattr(settings, 'COMPANY_NOTIFICATION_EMAIL', 'contact@kdrsoftwares.in')
            from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', 'contact@kdrsoftwares.in')

            send_mail(
                subject=subject,
                message=body,
                from_email=from_email,
                recipient_list=[recipient],
                fail_silently=True
            )
        except Exception as e:
            logger.warning(f"Could not send internal enquiry email notification: {e}")
