FROM node:8

#Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

#RUN npm install monk --save
RUN npm install -g nodemon
#&& npm install

COPY . .

EXPOSE 8080
CMD ["npm", "start"]