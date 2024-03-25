# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Desktop Download & Install Docker](https://www.docker.com/get-started/)

## Downloading

```
git clone https://github.com/Sefardim/nodejs2024Q1-service.git
```

Image form DockerHub

```
docker pull sefardim/nodejs2024q1-service-nest-api:latest
```

## Docker

You need to create docker build and run it. If you are using a mac or there were errors during the build stage, uncomment this line "RUN #apk add --no-cache --virtual .gyp python3 make g++" in Dockerfile

```
npm run docker:start
```

Stop running of app, use this:

```
npm run docker:stop
```


in your browser OpenAPI documentation by typing http://localhost:3000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```


### Auto-fix and format

```
npm run lint
```

```
npm run format
```
