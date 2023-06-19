# Build the files
FROM node:18-alpine AS builder
WORKDIR /var/www/app
COPY ./ ./
RUN npm i

# builds the things, outputs to /www
RUN npm run build

FROM nginx:latest
WORKDIR /use/share/nginx/html
COPY --from=builder /var/www/app/www ./
RUN ls -a
EXPOSE 80
