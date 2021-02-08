FROM node:alpine
RUN mkdir -p /bot
WORKDIR /bot
COPY /src /bot
COPY package.json /bot/package.json
COPY .env /bot/.env
RUN npm install
CMD ["node", "index.js"]