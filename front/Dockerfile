# base image
FROM node:lts

# set working directory
RUN mkdir -p /srv/docker-server
WORKDIR /srv/docker-server

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /srv/docker-server/node_modules/.bin:$PATH

# app dependencies, install 및 caching
COPY package.json /srv/docker-server/package.json
RUN npm install --no-cache
RUN npm install -g react-scripts
RUN npm install -g react-router-dom

COPY . /srv/docker-server

# 앱 실행
CMD ["npm", "start"]