FROM cypress/base:12.16.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY cypress.json ./
COPY cypress ./cypress

CMD npm run test:e2e