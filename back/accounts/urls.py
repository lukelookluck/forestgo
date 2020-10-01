from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

from . import views

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('verify/', verify_jwt_token),
    path('refresh/', refresh_jwt_token),
    # /api/accounts/
    # path('json1/', views.userinfo_list_json),
    # path('json2/', views.userinfo_list_json2),
    path('', views.userinfo_list),
    # path('<int:userinfo_pk>/', views.userinfo_detail),
    # path('create/', views.create_userinfo),
]
