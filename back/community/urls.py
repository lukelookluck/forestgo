from django.urls import path
from django.conf.urls import url
from . import views
from .views import ArticleViewSet, CommentViewSet

article_list = ArticleViewSet.as_view({"get": "list", "post": "create"})
article_detail = ArticleViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    url('', article_list, name="article-list"),
    url('<int:article_pk>', article_detail, name="article-detail"),
]