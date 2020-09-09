from urllib.request import Request, urlopen
from urllib.parse import urlencode
from urllib.parse import quote_plus, unquote

url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI'
# queryParams = '?' + urlencode({ quote_plus('ServiceKey') : 'iVBqaTNxcw6XtxmoFOHsio9Tt9VcHg7KJgq8OqkSDuaetVbO6eNnX12yRZE132RsY3wRbahNCICXi0ztwD0j4w%3D%3D' })

decode_key = unquote('iVBqaTNxcw6XtxmoFOHsio9Tt9VcHg7KJgq8OqkSDuaetVbO6eNnX12yRZE132RsY3wRbahNCICXi0ztwD0j4w%3D%3D')
queryParams = '?' + urlencode({ quote_plus('ServiceKey') : decode_key })

request = Request(url + queryParams)
request.get_method = lambda: 'GET'
# response_body = urlopen(request).read()
response_body = urlopen(request).read().decode('utf-8')
print(response_body)