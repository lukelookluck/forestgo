from rest_framework import serializers
from .models import Userinfo


class UserinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        # fields = ['id', 'email', 'name', 'profile_img', 'registered_at']
        fields = '__all__'
