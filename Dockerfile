FROM node:18-alpine

# Directorio de trabajo
WORKDIR /usr/src/app

# Copia archivos para instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install --production

# Copia todo el proyecto
COPY . .

# Puerto expuesto
EXPOSE 8080

# Usa formato shell para CMD (en lugar de JSON)
CMD ["node", "src/app.js"]
