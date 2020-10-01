from rest_framework import serializers
from .models import Article, Comment
from drf_extra_fields.fields import Base64ImageField

class ArticleSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    image = Base64ImageField()

    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ()

    def get_username(self, obj):
        return obj.user.username
    
    def get_comments(self, obj):
        comments = obj.comments.filter(parent=None)
        serializer = CommentSerializer(instance=comments, many=True)
        return serializer.data

class CommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    replys = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ()

    def get_username(self, obj):
        return obj.user.username
    
    def get_replys(self, obj):
        replys = obj.replys.all()
        serializer = CommentSerializer(instance=replys, many=True)
        return serializer.data
