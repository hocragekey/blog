FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install http-server -g

# Bundle app source
COPY ./src /usr/src/app

EXPOSE 8080
RUN http-server ./