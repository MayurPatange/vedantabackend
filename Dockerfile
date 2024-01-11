FROM node:19-alpine
# Create app directory to use
WORKDIR /app
#coping json file to app folder
COPY package.json /app
RUN yarn install && yarn cache clean
# Bundle app source
COPY . /app
EXPOSE 8080
CMD [ "node", "app.js" ]

