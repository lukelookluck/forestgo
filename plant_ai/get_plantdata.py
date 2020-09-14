from urllib.request import Request, urlopen
from urllib.parse import urlencode
from urllib.parse import quote_plus, unquote
import os
from bs4 import BeautifulSoup
import pandas as pd
from time import sleep


############### print와 sleep이 있어야 500에러 안 뜸. 서버에 너무 많이 계속 접근하면 500에러 떠서 중간에 딜레이 줘야함

pageNO = [x for x in range(1,19)] 
df = pd.DataFrame(columns=['fslistno', 'fskname', 'fsinhabit', 'fsguide', 'fslifetime', 'imgfilename1', 'imgfilename2'])
k = 0
for i in range(len(pageNO)):
    URL = 'http://apis.data.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?serviceKey=iVBqaTNxcw6XtxmoFOHsio9Tt9VcHg7KJgq8OqkSDuaetVbO6eNnX12yRZE132RsY3wRbahNCICXi0ztwD0j4w%3D%3D&type=xml&pageNo='+str(pageNO[i])+'&numOfRows=10&flag=Y'
    
    # if i!=0:
    #     sleep(200) 
    data = urlopen(URL).read()
    soup = BeautifulSoup(data, "html.parser")
    print("here!!!!!")
    for item in soup.findAll("item"):
        imageName = ['', '']
        imageURL = 'http://apis.data.go.kr/openapi/service/cultureInfoService/fStoryImgOpenAPI?serviceKey=iVBqaTNxcw6XtxmoFOHsio9Tt9VcHg7KJgq8OqkSDuaetVbO6eNnX12yRZE132RsY3wRbahNCICXi0ztwD0j4w%3D%3D&searchWrd='+item.fslistno.text
        imageData = urlopen(imageURL).read()
        imageSoup = BeautifulSoup(imageData, "html.parser")
        idx = 0
        for image in imageSoup.findAll("item"):
            imageName[idx] = 'http://www.forest.go.kr/images/data/down/story/' + image.imgfilename.text
            print(item.fslistno.text, ' ', image.imgno.text , ' ', idx, ' ', imageName[idx])
            idx = idx + 1
            idx = idx % 2
            sleep(0.05)

        df.loc[k] = [item.fslistno.text, item.fskname.text, item.fsinhabit.text, item.fsguide.text, item.fslifetime.text, imageName[0], imageName[1]]
        k=k+1
df.to_csv('./datasets/plantList.csv',encoding='utf-8-sig')