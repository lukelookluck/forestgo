from accounts.serializers import UserinfoSerializer


def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserinfoSerializer(user, context={'request': request}).data
    }
