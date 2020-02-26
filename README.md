# Top100Albums [![Codeship Status for tempaccs/top100albums](https://app.codeship.com/projects/3566b230-3719-0138-335d-627db92c49fc/status?branch=master)](https://app.codeship.com/projects/386352) [![codecov](https://codecov.io/gh/tempaccs/top100albums/branch/master/graph/badge.svg?token=YBZHRKEW2W)](https://codecov.io/gh/tempaccs/top100albums)

[Demo](http://EC2Co-EcsEl-1TZBPM7YBSC8P-273447432.eu-west-1.elb.amazonaws.com)

## Run

```bash
docker-compose up
```

You can access it on localhost:3000

## Develop

```bash
nvm use
npm i
npm start
```

### Run tests

```bash
npm run test
npm run test:e2e
```

### Continous Delivery

When a PR is created, the CI builds the docker image and runs linting, unit and E2E tests against it. Once it's merged, the CI builds a fresh docker image, runs again the quality control measures, and deploys the image to AWS (ECR). There AWS (ECS) runs the image. It can be accessed [here](http://EC2Co-EcsEl-1TZBPM7YBSC8P-273447432.eu-west-1.elb.amazonaws.com).
