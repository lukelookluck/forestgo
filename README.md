## 목차
- [개요](#개요)
- [기능](#기능)
- [유사 서비스](#유사-서비스) 
- [향후 전망](#향후-전망)
- [기술 스택](#기술-스택)
- [기술 설명](#기술-설명)
- [역할 분담](#역할-분담)
- [디렉토리 구조](#디렉토리-구조)
- [테스트 방법](#테스트-방법)

## 개요
> 자연과 식물을 좋아하는 사람들을 위한 촬영으로 모으는 식물도감 웹앱
> 포X몬 고처럼 식물을 촬영하고 수집하여 나만의 도감을 채워나가고 도전과제를 달성해나가는 게임 감성을 담은 웹 어플리케이션입니다.

## 기능
> 식물을 촬영하면 식물 종류를 구분하여 정보를 알려줍니다.
> 식물의 이름, 영칭, 키우는 방법, 꽃 피는 계절, 꽃말, 사용처 등과 같은 정보를 알려줍니다.
> 촬영한 식물들 기록은 수집이 가능하며 많이 수집을 하면 도전과제나 랭킹 달성과 같은 보상을 줍니다.
> - 사진 촬영으로 식물의 자세한 정보 확인 가능 (식물의 종류, 꽃말, 효능, 키우는 방법 등)
> - 찍은 식물은 내 식물도감에 등록, 글쓰기 가능
> - 나만의 식물 모음집
> - 수집 상황에 따른 등급(브론즈, 실버, 골드)
> - 식물을 좋아하는 사람들을 위한 커뮤니티 제공, 좋아요와 댓글 기능.

## 유사 서비스
> 포켓몬 고: 수집 요소, 도전과제는 포켓몬 고에서 포켓몬을 모으는 것과 유사하지만, 포켓몬 고는 AR을 이용한 게임이며 ForestGo는 식물을 직접 찍어서 수집한다는 점이 다릅니다.
> 모야모: 꽃, 나무, 식물 사진을 찍으면 전문가가 이름을 알려주는 어플리케이션. 사진을 찍으면 이름을 알려준다는 점에서 ForestGo와 유사하지만, 모야모는 사람이 직접 답변을 달아주는 반면 ForestGo는 인공지능으로 구분하여 실시간으로 알려줍니다.

## 향후 전망
> 현재 꽃 종류만을 서비스하고 있지만 점점 종류를 추가해나가서 모든 식물 종류 추가를 목표로 하고 있습니다.
> 종류도 10여 종부터 시작하여 점점 더 많이 추가해나갈 예정입니다.

## 기술 스택
> - React
> - Django
> - SQLite
> - AWS
> - Docker
> - Jenkins
> - tensorflow
> - Keras
> - meterial-ui
> - selenium

## 기술 설명
> Django에서 Rest API 백엔드, React로 프론트엔드 구현.
> Keras Library를 활용하여 꽃 사진을 학습.
> Image Augmentation, Dropout을 사용하여 Overfitting 방지.

## 디렉토리 구조
> - back: Django 프로젝트 폴더
> - crolling: 크롤링 프로그램
> - front: React 프로젝트 폴더
> - plant_ai, plant_ai_v2: 인공지능 학습 프로젝트, 데이터셋 등, v2를 사용
> - 발표자료: ppt, UCC
> - 산출물: 시퀀스 다이어그램, 테스트케이스, 와이어프레임

## 역할 분담
> - 성예희: 백엔드 개발자, 팀장
> - 최재훈: 백엔드 개발자, 기획자
> - 홍세진: 풀스택 개발자, 테크리더
> - 이윤민: 프론트엔드 개발자, QA
> - 유건우: 프론트엔드 개발자, QA

## 테스트 방법
> https://j3d207.p.ssafy.io/
> 아이디: tomato@naver.com
> 비밀번호: tomato920403

