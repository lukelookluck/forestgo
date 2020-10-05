from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from accounts.models import Userinfo
from forestbook.models import Forestbook, Userbook
from community.models import Article, Comment


admin.site.register(Userinfo, UserAdmin)
admin.site.register(Forestbook)
admin.site.register(Userbook)
admin.site.register(Article)