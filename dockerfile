# Definir el tipo de aplicacion que voy a hacer.
FROM node

# Establece el directorio de trabajo.
WORKDIR /backend3-peyraga

# Copia los archivos de la aplicación
COPY package*.json ./
# Instalar con modules de npm.
RUN npm install --build-from-source
COPY . .

# Expone el puerto de la aplicación.
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
