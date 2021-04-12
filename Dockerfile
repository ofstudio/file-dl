FROM node:14-alpine AS builder
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY ["./", "./"]
RUN yarn run build

FROM nginx:alpine
COPY --from=builder ["/app/build", "/usr/share/nginx/html"]
