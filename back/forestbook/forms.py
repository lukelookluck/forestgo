# from django.forms import ModelForm
from django import forms
from .models import Forestbook, Userbook
from .check import *
# from django.contrib.auth import get_user_model

class PictureTestForm(forms.ModelForm):
    img = forms.ImageField()

    class Meta:
        model = Userbook
        fields = ('img', )

    def __init__(self, *args, **kwargs):
        self.userinfo_id = kwargs.pop("user", None)
        super(PictureTestForm, self).__init__(*args, **kwargs)
    
    def save(self, commit=True):
        print("---------123-------")
        print(self.userinfo_id)
        instance = super(PictureTestForm, self).save()
        instance = super(PictureTestForm, self).save(commit=False)
        if instance.img:
            flower_name, flower_score = flower_check(instance.img.url)
            print("-----------------------")
            print(flower_name)
            flower = Forestbook.objects.get(name=flower_name)
            print(flower)
            instance.forestbook_id = flower
            instance.userinfo_id = self.userinfo_id
            print("-----------------------")
        if commit:
            print("3")
            instance.save()    
        return instance
