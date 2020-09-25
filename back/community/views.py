from django.shortcuts import render
from .serializers import ArticleSerializer, CommentSerializer
from .models import Article, Comment
from rest_framework import viewsets

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.all().order_by("created_at")
    
    def perform_create(self, serializer):
        serializer.save()
    
class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.all().order_by("created_at")
    
    def perform_create(self, serializer):
        serializer.save()
    
