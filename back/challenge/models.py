from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Challenge(models.Model):
    title = models.CharField('title', max_length=50)
    description = models.TextField('description')
    type = models.IntegerField('type', blank=True)
    icon_img = models.ImageField(default=None)

class Userchallenge(models.Model):
    userinfo_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='', blank=True, null=True)
    challenge_id = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    date = models.DateTimeField('date', auto_now_add=True)
