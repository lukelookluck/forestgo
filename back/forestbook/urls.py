from django.urls import path
from django.conf.urls import url
from . import views
from .views import ForestbookViewSet, UserbookViewSet

forestbook_list = ForestbookViewSet.as_view({"get": "list", "post": "create"})
forestbook_detail = ForestbookViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    url('', forestbook_list, name = "forestbook-list"),
    url('<int:Forestbook_pk>', forestbook_detail, name="forestbook-detail"),

]
