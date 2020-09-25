from django.shortcuts import render
from .serializers import ChallengeSerializer, UserChallengeSerializer
from .models import Challenge, Userchallenge
from rest_framework import viewsets
# Create your views here.

class ChallengeViewSet(viewsets.ModelViewSet):
    serializer_class = ChallengeSerializer

    def get_queryset(self):
        return Challenge.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class UserChallengeViewSet(viewsets.ModelViewSet):
    serializer_class = UserChallengeSerializer

    def get_queryset(self):
        return Userchallenge.objects.all().order_by("created_at")

    def perform_create(self, serializer):
        serializer.save()
