from rest_framework import serializers
from .models import Forestbook, Userbook



class ForestbookSerializer(serializers.ModelSerializer):

    img = serializers.ImageField(use_url = True)
    
    class Meta:
        model = Forestbook
        fields = '__all__'

class UserbookSerializer(serializers.ModelSerializer):

    img = serializers.ImageField(use_url = True)

    class Meta:
        model = Userbook
        fields = '__all__'

