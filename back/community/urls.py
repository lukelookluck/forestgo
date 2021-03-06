from django.urls import path
from django.conf.urls import url
from . import views

# article_list = ArticleViewSet.as_view({"get": "list", "post": "create"})
# article_detail = ArticleViewSet.as_view({"get": "list", "post": "create"})

urlpatterns = [
    path('', views.ArticleViewSet.as_view()),
    path('my_article/', views.UserArticleViewSet.as_view()),
    path('<int:pk>/', views.DetailArticle.as_view()),
    path('comment/', views.ListComment.as_view()),
    path('comment/<int:pk>/', views.DetailComment.as_view()),
    path('article/<int:article_pk>/', views.LikeArticle),
    path('comment/like/<int:comment_pk>/', views.LikeComment),



]
