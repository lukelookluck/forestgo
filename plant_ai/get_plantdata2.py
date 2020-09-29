from urllib.request import Request, urlopen
from urllib.parse import urlencode
from urllib.parse import quote_plus, unquote
import os
from bs4 import BeautifulSoup
import pandas as pd
from time import sleep

############### 기존 공공데이터가 적합하지 않다고 판단. 새로운 자료 찾는 중

############### print와 sleep이 있어야 500에러 안 뜸. 서버에 너무 많이 계속 접근하면 500에러 떠서 중간에 딜레이 줘야함

pageNO = [x for x in range(1,38)] 
df = pd.DataFrame(columns=['datano', '꽃 이름', '꽃 영문이름', '꽃말', '사용', '생장'])
k = 0
for i in range(len(pageNO)):
    URL = 'http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo/selectTodayFlowerList?serviceKey=iVBqaTNxcw6XtxmoFOHsio9Tt9VcHg7KJgq8OqkSDuaetVbO6eNnX12yRZE132RsY3wRbahNCICXi0ztwD0j4w%3D%3D&type=xml&pageIndex='+str(pageNO[i])+'&pageUnit=10&flag=Y'
    data = urlopen(URL).read()
    soup = BeautifulSoup(data, "html.parser")
    print("here!!!!!")
    for result in soup.findAll("result"):
        df.loc[k] = [result.datano.text, result.flownm.text, result.fengnm.text, result.flowlang.text, result.fuse.text, result.fgrow.text]
        k=k+1
df.to_csv('./datasets/flowerList.csv',encoding='utf-8-sig')