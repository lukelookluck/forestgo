from django.shortcuts import render
from .serializers import ForestbookSerializer, UserbookSerializer
from .models import Forestbook, Userbook
from rest_framework import viewsets
# Create your views here.

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
