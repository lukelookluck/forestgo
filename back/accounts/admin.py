from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from accounts.models import Userinfo


admin.site.register(Userinfo, UserAdmin)