# Build the files
FROM node:18-alpine AS builder
WORKDIR /var/www/app
COPY ./ ./
RUN npm i

# builds the things, outputs to /www
RUN npm run build

FROM aikain/simplehttpserver:0.1
COPY --from=builder /var/www/app/www /var/www

EXPOSE 80
