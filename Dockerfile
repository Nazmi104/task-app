FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy the Prisma schema
COPY prisma ./prisma/
# Generate Prisma Client specifically for linux-musl
RUN npx prisma generate --schema=./prisma/schema.prisma
COPY . .
CMD ["npx", "ts-node", "src/server.ts"]

