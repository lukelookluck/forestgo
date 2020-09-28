from django.shortcuts import render
from .serializers import ArticleSerializer, CommentSerializer
from .models import Article, Comment
from rest_framework import viewsets, generics
from rest_framework.response import Response
from accounts.models import Userinfo

from rest_framework.decorators import permission_classes, authentication_classes, api_view

# Create your views here.


class ArticleViewSet(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


@api_view(['POST'])
def LikeArticle(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    print(article.LIKE)
    user_id = request.data.get('user')
    user = Userinfo.objects.get(id=user_id)
    LIKE = article.LIKE.all()

    if user in LIKE:
        article.LIKE.remove(user)
    else:
        article.LIKE.add(user)

    result = article.LIKE.all().count()
    return Response(result)
