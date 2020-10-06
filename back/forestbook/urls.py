from django.urls import path
from django.conf.urls import url
from . import views
from .views import ForestbookViewSet, UserbookViewSet, flower_check, MyUserbookViewSet, flower_save
from .models import Forestbook, Userbook

# my_forest = UserbookViewSet.as_view({"get": "list"})

forestbook_list = ForestbookViewSet.as_view({"get": "list", "post": "create"})
forestbook_detail = ForestbookViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    # url('my_forest/', my_forest, name="my-forest"),
    url('my_forest/', MyUserbookViewSet.as_view()),
    url('save/', flower_save, name = "save"), 
    url('list/', forestbook_list, name = "forestbook-list"),
    url('detail/' + r'(?P<pk>[0-9]+)/', forestbook_detail, name="forestbook-detail"),
    url('flower/', flower_check),
]
