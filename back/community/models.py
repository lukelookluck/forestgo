from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=20)
    detail = models.TextField()
    image = models.ImageField(upload_to="%Y/%m/%d")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='articles')
    LIKE = models.ManyToManyField(
        get_user_model(), related_name='like_articles', blank=True)
    SAVE = models.ManyToManyField(
        get_user_model(), related_name='save_articles', blank=True)


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='my_comments')
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey(
        'self', related_name='replys', on_delete=models.CASCADE, null=True, blank=True)
    LIKE = models.ManyToManyField(
        get_user_model(), related_name='comment_articles', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
