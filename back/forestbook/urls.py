from django.urls import path
from django.conf.urls import url
from . import views
from .views import ForestbookViewSet, UserbookViewSet, flower_check, UserbookViewSet
from .models import Forestbook, Userbook

my_forest = UserbookViewSet.as_view({"get": "list"})

forestbook_list = ForestbookViewSet.as_view({"get": "list", "post": "create"})
forestbook_detail = ForestbookViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    url('my_forest/', my_forest, name="my-forest"),
    url('list/', forestbook_list, name = "forestbook-list"),
    url('detail/<int:pk>/', forestbook_detail, name="forestbook-detail"),
    url('flower/', flower_check)
]
