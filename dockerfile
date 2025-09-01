FROM node:20-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/knexfile.ts ./knexfile.ts
COPY --from=builder /app/database ./database

EXPOSE 3000
CMD ["node", "dist/main.js"]
