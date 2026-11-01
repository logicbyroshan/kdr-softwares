from rest_framework import generics
from .models import PricingPlan
from .serializers import PricingPlanSerializer


class PricingPlanListView(generics.ListAPIView):
    """
    Returns published pricing plans.
    Can be filtered by product slug: ?product_slug=cardflow
    """
    serializer_class = PricingPlanSerializer

    def get_queryset(self):
        qs = PricingPlan.objects.filter(is_published=True).order_by('display_order', 'id')
        product_slug = self.request.query_params.get('product_slug')
        if product_slug:
            qs = qs.filter(product__slug=product_slug)
        return qs
