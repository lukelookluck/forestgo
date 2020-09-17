from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Forestbook(models.Model):
    name = models.CharField('NAME', max_length=20)
    fullname = models.CharField('FULLNAME', max_length=100)
    species = models.CharField('SPECIES', max_length=20)
    description = models.TextField('DESCRIPTION')
    type = models.IntegerField('TYPE', blank=True)
    habitat = models.CharField('HABITAT', max_length=20)
    season = models.IntegerField('SEASON', blank=True)
    img = models.CharField('IMG', max_length=100, blank=True)

    def __str__(self):
        pass
    
    def get_absolute_url(self):
        pass

class Userbook(models.Model):
    userinfo_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='', blank=True, null=True)
    forestbook_id = models.ForeignKey(Forestbook, on_delete=models.CASCADE)
    date = models.DateTimeField('DATE', auto_now_add=True)
    img = models.CharField('IMG', max_length=100, blank=True)
    
    def __str__(self):
        pass
    
    def get_absolute_url(self):
        pass

