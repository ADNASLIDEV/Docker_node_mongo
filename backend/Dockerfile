# Main source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp
# Why nodemon instead of node: Nodemon is like a live-server for your node application. Any changes made in your node application will get reflected as server will restart again. Nodemon does not require any additional changes to the code & is a replacement wrapper for node.

FROM node:alpine

WORKDIR /app/

#   Import the dependencies needed for this env
COPY ./package.json .

#   Install the dependencies needed
RUN npm install

COPY ./app.js /app

#   Set the PATH env var to launch the nodemon command
ENV PATH=$PATH:/app/node_modules/.bin 

#   Using nodemon instead of node (see above)
ENTRYPOINT [ "nodemon" ]

CMD [ "app.js" ]