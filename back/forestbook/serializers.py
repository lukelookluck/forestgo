from rest_framework import serializers
from .models import Forestbook, Userbook

class ForestbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forestbook
        fields = '__all__'

class UserbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userbook
        fields = '__all__'

