"""
WSGI config for back project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import sys
print(sys.path)
sys.path.append('/usr/local/lib/python3.7/site-packages')
sys.path.append('/srv/docker-server')

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'back.settings.product')

application = get_wsgi_application()
