from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Challenge(models.Model):
    title = models.CharField('TITLE', max_length=50)
    description = models.TextField('DESCRIPTION')
    type = models.IntegerField('TYPE', blank=True)
    icon_img = models.CharField('IMG', max_length=100, blank=True)

    def __str__(self):
        pass
    
    def get_absolute_url(self):
        pass

class Userchallenge(models.Model):
    userinfo_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='', blank=True, null=True)
    challenge_id = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    date = models.DateTimeField('DATE', auto_now_add=True)

    def __str__(self):
        pass
    
    def get_absolute_url(self):
        pass
