# ===== STAGE 1 — BUILD =====
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ===== STAGE 2 — NGINX =====
FROM nginx:alpine

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config correto
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build do Vue
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]