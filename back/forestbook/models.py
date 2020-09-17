from django.db import models

# Create your models here.
class forestbook(models.Model):
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

class userbook(models.Model):
    registered_at = models.DateTimeField('REGISTERED AT', auto_now_add=True)
    img = models.CharField('IMG', max_length=100, blank=True)

    def __str__(self):
        pass
    
    def get_absolute_url(self):
        pass

