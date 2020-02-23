[![codecov](https://codecov.io/gh/tempaccs/top100albums/branch/master/graph/badge.svg?token=YBZHRKEW2W)](https://codecov.io/gh/tempaccs/top100albums)

# Top100Albums

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

### Continous Integration

When a PR is created, the CI builds the docker image and runs linting, unit and E2E tests against it. Once it's merged, the CI builds a fresh docker image, runs again the quality control measures, and deploys the image to AWS. There AWS runs the image.
