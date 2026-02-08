FROM node:20-alpine
WORKDIR /app
RUN echo '{"name":"backend","version":"1.0.0","main":"src/index.ts","scripts":{"start":"ts-node src/index.ts"},"dependencies":{"cors":"^2.8.5","dotenv":"^16.4.5","express":"^4.19.2","pg":"^8.11.5","prisma":"^5.13.0"},"devDependencies":{"@types/cors":"^2.8.17","@types/express":"^4.17.21","@types/node":"^20.12.7","nodemon":"^3.1.0","ts-node":"^10.9.2","typescript":"^5.4.5"}}' > package.json
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
