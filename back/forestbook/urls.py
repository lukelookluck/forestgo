from django.urls import path
from django.conf.urls import url
from . import views
from .views import ForestbookViewSet, UserbookViewSet, flower_check
from .models import Forestbook, Userbook

forestbook_list = ForestbookViewSet.as_view({"get": "list", "post": "create"})
forestbook_detail = ForestbookViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    url('list/', forestbook_list, name = "forestbook-list"),
    url(r'(?P<pk>[0-9]+)/', forestbook_detail, name="forestbook-detail"),
    url('flower/', flower_check)
]
