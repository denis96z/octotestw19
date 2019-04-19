FROM node:11.4.0 as base
WORKDIR /tmp
#RUN apt-get update && apt-get install -y software-properties-common \
#        && add-apt-repository ppa:canonical-chromium-builds/stage \
#        && apt-get update && apt-get install -y chromium-browser


RUN apt-get update && apt-get install -y gdebi-core \
       && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
       && gdebi -n google-chrome*.deb

COPY . .
RUN npm i && npm install fibers

ENTRYPOINT ./node_modules/.bin/wdio wdio.conf.js
