FROM node:24-trixie-slim

ENV NODE_ENV=production \
    # Docker sets HOSTNAME to the container ID, which app.js would otherwise bind to
    HOSTNAME=0.0.0.0 \
    PORT=8080

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY app.js ./

USER node

EXPOSE 8080

CMD ["node", "app.js"]
