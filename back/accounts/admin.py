from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from accounts.models import Userinfo
from challenge.models import Challenge, Userchallenge
from forestbook.models import Forestbook, Userbook


admin.site.register(Userinfo, UserAdmin)
admin.site.register(Challenge)
admin.site.register(Userchallenge)
admin.site.register(Forestbook)
admin.site.register(Userbook)