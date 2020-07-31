FROM node:12.18-alpine3.11

ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN npm install

CMD npm start
