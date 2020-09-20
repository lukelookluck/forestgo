from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Forestbook(models.Model):
    name = models.CharField('name', max_length=20)
    fullname = models.CharField('fullname', max_length=100)
    species = models.CharField('species', max_length=20)
    description = models.TextField('description')
    type = models.IntegerField('type', blank=True)
    habitat = models.CharField('habitat', max_length=20)
    season = models.IntegerField('season', blank=True)
    img = models.CharField('img', max_length=100, blank=True)

class Userbook(models.Model):
    userinfo_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='', blank=True, null=True)
    forestbook_id = models.ForeignKey(Forestbook, on_delete=models.CASCADE)
    date = models.DateTimeField('date', auto_now_add=True)
    img = models.CharField('img', max_length=100, blank=True)
    
