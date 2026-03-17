# Usar imagen base de Node
FROM node:20 AS builder

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Construir el proyecto (Vite)
RUN npm run build

# Instalar servidor para servir la app
RUN npm install -g serve

# Exponer puerto
EXPOSE 3000

# Comando para correr la app
CMD ["serve", "-s", "dist", "-l", "3000"]