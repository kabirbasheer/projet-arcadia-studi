# Étape de construction
FROM node:20 AS build

WORKDIR /app

# Copie des fichiers dans le conteneur
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install

# Copie du code source
COPY ./backend /app

# Commande pour démarrer l'application
CMD ["npm", "run", "start"]
