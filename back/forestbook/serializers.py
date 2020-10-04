from rest_framework import serializers
from .models import Forestbook, Userbook


class ForestbookSerializer(serializers.ModelSerializer):

    img = serializers.ImageField(use_url=True)

    class Meta:
        model = Forestbook
        fields = '__all__'


# class UserbookSerializer(serializers.ModelSerializer):

#     img = serializers.ImageField(use_url=True)

#     class Meta:
#         model = Userbook
#         fields = '__all__'

class UserbookSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)
    flowername = serializers.SerializerMethodField()

    class Meta:
        model = Userbook
        fields = '__all__'
        read_only_fields = ()
    
    def get_flowername(self, obj):
        return obj.forestbook_id.name
    