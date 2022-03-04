FROM node:16 as base

WORKDIR /projects/hello-world

COPY package*.json ./

RUN npm i

COPY . .


FROM base as production

ENV NODE_PATH=./build
#RUN npm run build