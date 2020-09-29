import os

from .base import *


# SECRET_KEY = os.environ['SECRET_KEY']
SECRET_KEY = 'ws=8q$6ggyrrc8%zn9b-aftem5qx(&b*yew*r3yd!2f$68h$y!'

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
