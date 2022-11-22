FROM node:14-alpine as builder

WORKDIR /usr/app/

COPY .env .

COPY package.json .
COPY package-lock.json .
COPY ./public ./public
COPY ./src ./src

RUN npm install -g npm@8.13.1

RUN npm install react-scripts

RUN npm run build

FROM flashspys/nginx-static

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build/ /static

EXPOSE 80