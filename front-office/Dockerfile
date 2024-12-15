# Étape de construction
FROM node:20 AS build

WORKDIR /app

# Copie des fichiers du frontend
COPY ./front-office/package.json ./front-office/package-lock.json ./
RUN npm install

# Copie du code source
COPY ./front-office /app

# Construction du frontend
RUN npm run build

# Démarrage du frontend
CMD ["npm", "run", "start"]
