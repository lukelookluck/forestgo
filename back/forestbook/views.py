from django.shortcuts import render
from .serializers import ForestbookSerializer, UserbookSerializer
from .models import Forestbook, Userbook

from rest_framework import viewsets
from rest_framework.decorators import api_view
# Create your views here.

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# flower_check에 쓰임
from .forms import PictureTestForm
from rest_framework import status
from rest_framework.response import Response



@api_view(["POST"])
def flower_check(request):
    flower_form = PictureTestForm(request.POST, request.FILES, user=request.user)
    if flower_form.is_valid():
        flower_form.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

class ForestbookViewSet(viewsets.ModelViewSet):
    serializer_class = ForestbookSerializer

    def get_queryset(self):
        return Forestbook.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class UserbookViewSet(viewsets.ModelViewSet):
    serializer_class = UserbookSerializer

    def get_queryset(self):
        return Userbook.objects.all().order_by("created_at")
    
    def perform_create(self, serializer):
        serializer.save()
