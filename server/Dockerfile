FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:22
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

ENV PORT=8080
EXPOSE 8080

CMD ["node", "dist/index.js"]

