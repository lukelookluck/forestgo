from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http.response import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Userinfo
# from .serializers import UserinfoSerializer

# # rest framework R
# @api_view(['GET'])
# def userinfo_list(request):
#     userinfos = Userinfo.objects.all()
#     serializer = UserinfoSerializer(userinfos, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def userinfo_detail(request, userinfo_pk):
#     userinfo = get_object_or_404(Userinfo, pk=userinfo_pk)
#     serializer = UserinfoSerializer(userinfo)
#     return Response(serializer.data)

# @api_view(['POST'])
# def create_userinfo(request):
#     pass
    





#--- 아래는 legacy

# 노가다
# @require_GET
# def userinfo_list_json(request):
#     userinfos = Userinfo.objects.all()

#     data = []
#     for userinfo in userinfos:
#         data.append({
#             'user_id': userinfo.id,
#             'user_email': userinfo.email,
#             'user_name': userinfo.name,
#             'user_password': userinfo.password,
#             'user_profile_img' : userinfo.profile_img,
#             'user_registered_at' : userinfo.registered_at,
#         })
    
#     return JsonResponse(data, safe=False)

# # django core serializer
# @require_GET
# def userinfo_list_json2(request):
#     from django.core import serializers

#     userinfos = Userinfo.objects.all()
#     data = serializers.serialize('json', userinfos)

#     return HttpResponse(data, content_type='application/json')

