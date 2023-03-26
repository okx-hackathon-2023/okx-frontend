ARG NODE_IMAGE=node:16.13.0
ARG NGINX_IMAGE=nginx:alpine

FROM ${NODE_IMAGE} as frontend_builder

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

ADD . .

RUN yarn build

FROM ${NGINX_IMAGE}

COPY --from=frontend_builder /code/build/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 80
