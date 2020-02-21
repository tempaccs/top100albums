FROM node:12.16.1-alpine

WORKDIR /app

COPY package.json app/
COPY package-lock.json app/

RUN npm ci

COPY . /app