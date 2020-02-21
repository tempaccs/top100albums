FROM node:12.16.1-alpine

ENV PORT=80

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci

COPY . /app

RUN npm run build

CMD npx serve -p $PORT -s build

EXPOSE $PORT