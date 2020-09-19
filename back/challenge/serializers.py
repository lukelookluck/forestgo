from rest_framework import serializers
from .models import Challenge, Userchallenge

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = '__all__'

class UserChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userchallenge
        fields = '__all__'