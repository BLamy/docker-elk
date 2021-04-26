FROM node:12

WORKDIR /app

COPY ./package*.json ./
RUN npm install
ENV PORT=4000

COPY . .
CMD ["npm","run","start"]