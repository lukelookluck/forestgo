from django.shortcuts import render
from .serializers import ForestbookSerializer, UserbookSerializer
from .models import Forestbook, Userbook
from accounts.models import Userinfo

from rest_framework import viewsets, generics
from rest_framework.decorators import api_view
# Create your views here.

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# flower_check에 쓰임
from .forms import PictureTestForm
from rest_framework import status
from rest_framework.response import Response
from django.core import serializers
from django.http import HttpResponse

from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from django_filters.rest_framework import DjangoFilterBackend


@permission_classes((IsAuthenticated,))
@authentication_classes((JSONWebTokenAuthentication,))
class MyUserbookViewSet(generics.ListCreateAPIView):
    queryset = Userbook.objects.filter(flag=1)
    serializer_class = UserbookSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['userinfo_id']


@api_view(["GET"])
def flower_save(request):
    my_flower_pk = request.GET.get('pk')
    recent_user_flower = Userbook.objects.get(pk=my_flower_pk)
    recent_user_flower.flag = 1
    recent_user_flower.save()
    return HttpResponse(status=status.HTTP_200_OK)

@api_view(["POST"])
def flower_check(request):
    flower_form = PictureTestForm(
        request.POST, request.FILES, user=request.user)
    if flower_form.is_valid():
        flower_form.save()
        recent_user_flower = Userbook.objects.filter(
            userinfo_id__email=request.user.email).order_by('-id')[:1].get()
        recent_flower = Forestbook.objects.filter(
            name=recent_user_flower.forestbook_id.name)
        print(recent_user_flower.pk)
        json_data = serializers.serialize('json', recent_flower)
        json_data_userbook_pk = (json_data[:-3] + ', "userbook_pk": "' + str(recent_user_flower.pk) + '"}}]')
        return HttpResponse(json_data_userbook_pk, content_type='application/json')
    return Response(status=status.HTTP_400_BAD_REQUEST)


class ForestbookViewSet(viewsets.ModelViewSet):
    serializer_class = ForestbookSerializer

    def get_queryset(self):
        return Forestbook.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class UserbookViewSet(viewsets.ModelViewSet):
    serializer_class = UserbookSerializer

    def get_queryset(self):
        return Userbook.objects.all().order_by("created_at")

    def perform_create(self, serializer):
        serializer.save()
