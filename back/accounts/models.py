from django.db import models

# Create your models here.
class Userinfo(models.Model):
    email = models.CharField(max_length=50)
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=50)
    profile_img = models.CharField(max_length=100)
    registered_at = models.DateTimeField(auto_now_add=True)