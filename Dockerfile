FROM centos:latest

# Install latest version of node
RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs
RUN yum install gcc-c++ make

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install http-server -g

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD http-server ./src/client/