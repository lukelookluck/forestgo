from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Forestbook(models.Model):
    name = models.CharField('name', max_length=20)
    eng_name = models.CharField('eng_name', max_length=30)
    sympolism = models.CharField('sympolism', max_length=30)
    description = models.TextField('description')
    use = models.TextField('use')
    growth = models.TextField('growth')
    season = models.CharField('season', max_length=20)
    img = models.ImageField(default=None)

class Userbook(models.Model):
    userinfo_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='userinfo_id', blank=True, null=True)
    forestbook_id = models.ForeignKey(Forestbook, on_delete=models.CASCADE, verbose_name='forestbook_id', blank=True, null=True)
    date = models.DateTimeField('date', auto_now_add=True)
    img = models.ImageField(default=None)
    
