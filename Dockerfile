FROM node:20.11.1-alpine

RUN apk add --no-cache --virtual .gyp python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

CMD ["npm", "run", "start:migrate:dev"]