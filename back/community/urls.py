from django.urls import path
from django.conf.urls import url
from . import views

# article_list = ArticleViewSet.as_view({"get": "list", "post": "create"})
# article_detail = ArticleViewSet.as_view({"get": "list", "post": "create"})

urlpatterns = [
    path('', views.ArticleViewSet.as_view()),
    path('<int:article_pk>/', views.ArticleViewSet.as_view()),
    path('comment/', views.ListComment.as_view()),
    path('comment/<int:pk>/', views.DetailComment.as_view()),
    path('article/<int:article_pk>/', views.LikeArticle),

    path('article_like/<int:article_pk>/', views.LikeArticle),
    path('comment/like/<int:comment_pk>/', views.LikeComment),



]
