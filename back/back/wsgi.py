"""
WSGI config for back project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

from django.core.wsgi import get_wsgi_application
import os
import sys
new_path = [
    '/srv/docker-server',
    '/usr/local/lib/python37.zip',
    '/usr/local/lib/python3.7',
    '/usr/local/lib/python3.7/lib-dynload',
    '/usr/local/lib/python3.7/site-packages',
]
sys.path.extend(new_path)


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'back.settings.product')

application = get_wsgi_application()
