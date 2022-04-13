FROM node:17-buster-slim

WORKDIR /app/react_frontend
RUN $ECHO pwd

COPY package.json .
RUN $ECHO ls
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]