# Stage 1: Build
FROM node:24.1.0-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# RUN npm run build

# # Stage 2: Runtime
# FROM node:24.1.0-slim

# WORKDIR /app

# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/next.config.ts ./
# COPY --from=builder /app/tsconfig.json ./
# COPY --from=builder /app/globals.css ./globals.css 

# RUN npm install


EXPOSE 3000
ENV NODE_ENV=development

CMD ["npm", "run", "dev"]