FROM node:20-alpine
WORKDIR /app
COPY server/package.json server/package-lock.json* server/tsconfig.json ./server/
COPY prisma ./prisma
RUN npm --prefix server ci
COPY server/src ./server/src
RUN npx prisma generate
CMD ["npm","--prefix","server","run","start"]
