# pip install selenium

from urllib.request import urlopen, urlretrieve
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
import os
from pathlib import Path
home = str(Path.home())


def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)


search = input('검색어 : ')
url = f'https://www.google.co.kr/search?hl=ko&tbm=isch&sxsrf=ALeKk02xceXoVDnzcb4k1sUPNDKBpny69g%3A1600754661979&source=hp&biw=1920&bih=937&ei=5ZNpX5jDOYqTr7wP5pGv6Ak&q={quote_plus(search)}&oq={quote_plus(search)}&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDUPQHWJ4fYMIkaAFwAHgAgAGEAYgBgQaSAQMwLjeYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAA&sclient=img&ved=0ahUKEwjYyf3ni_zrAhWKyYsBHebIC50Q4dUDCAc&uact=5'
print(url)

driver = webdriver.Chrome(
    home + '\\crolling\\chromedriver.exe')
driver.get(url)
for i in range(500):
    driver.execute_script('window.scrollBy(0,10000)')


html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
img = soup.select('.Q4LuWd')

imgurl = []

for i in img:
    try:
        imgurl.append(i.attrs['src'])
    except KeyError:
        imgurl.append(i.attrs['data-src'])

print(len(imgurl))

createFolder(home + f'\\crolling\\{search}')

n = 1
for i in imgurl:
    urlretrieve(
        i, home + f'\\crolling\\{search}\\' + search + str(n) + '.jpg')
    n += 1

driver.close()
