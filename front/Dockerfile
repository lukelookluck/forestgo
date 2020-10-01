# base image
FROM node:lts

# set working directory
WORKDIR /srv/docker-server

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /srv/docker-server/node_modules/.bin:$PATH

# app dependencies, install 및 caching
COPY package.json /srv/docker-server/package.json
RUN npm install

# 앱 실행
CMD ["npm", "start"]