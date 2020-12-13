FROM nginx:latest

RUN apt-get update
RUN apt-get install vim -y
RUN apt-get install bash

COPY nginx.conf /etc/nginx/nginx.conf
