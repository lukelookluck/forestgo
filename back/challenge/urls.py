from django.urls import path
from django.conf.urls import url
from . import views
from .views import ChallengeViewSet, UserChallengeViewSet

challenge_list = ChallengeViewSet.as_view({"get": "list", "post": "create"})
challenge_detail = ChallengeViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    url('', challenge_list, name = "challenge-list"),
    url('<int:Challenge_pk>', challenge_detail, name="challenge-detail"),
]