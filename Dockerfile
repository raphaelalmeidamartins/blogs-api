FROM node:16
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "lsof"]
WORKDIR /app
COPY package.json .
RUN ["npm", "install"]
COPY . .
CMD ["npm", "start"]
