FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli@8.3.22
RUN npm install
RUN ng build --output-path=dist

FROM nginx:1.17.6-alpine

# Copy Angular application into nginx folder
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
