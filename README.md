# 🚀 Backend III - Entrega Final  
**API para gestión de usuarios, mascotas y adopciones**

---

## 📌 Características  
- ✅ Autenticación con JWT  
- ✅ Documentación Swagger disponible en `/api-docs`  
- ✅ Dockerización e imagen publicada en DockerHub  
- ✅ Tests para endpoints de adopciones  
- ✅ Despliegue en Render

---

## 🔧 Requisitos  
- Node.js 18+  
- MongoDB Atlas  
- Docker (opcional)

---

## 🛠️ Instalación  

### 1. Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/preentrega-backend3.git
cd preentrega-backend3
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Configurar archivo `.env`:
```env
MONGO_URL=mongodb+srv://usuario:contraseña@cluster0.xxxxx.mongodb.net/nombreDB?retryWrites=true&w=majority
JWT_SECRET=tu_clave_super_secreta
PORT=8080
```

---

## 🐳 Docker 

### 1. Construir la imagen:
```bash
docker build -t tuusuario/preentrega-backend3 .
```

### 2. Ejecutar el contenedor:
```bash
docker run -p 8080:8080 \
  -e MONGO_URL="tu_url" \
  -e JWT_SECRET="tu_clave" \
  tuusuario/preentrega-backend3
```

📦 Imagen disponible en DockerHub:  
https://hub.docker.com/repository/docker/stefandmdev/backend-coderhouse/general

---

## 🚀 Endpoints clave

| Método | Ruta                   | Descripción         |
|--------|------------------------|---------------------|
| POST   | `/api/users`           | Registrar usuario   |
| POST   | `/api/sessions/login`  | Iniciar sesión      |
| GET    | `/api/pets`            | Listar mascotas     |
| POST   | `/api/adoptions`       | Crear adopción      |

---

## 🧪 Tests

### Ejecutar tests funcionales:
```bash
npm test
```

**Cobertura:**
- ✔️ Creación de adopciones  
- ✔️ Errores de validación  
- ✔️ Permisos de usuario

---

## 📚 Documentación Swagger

Accedé a la documentación en Swagger UI:

- Local: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)  
- Producción: [https://preentrega-backend3.onrender.com/api-docs](https://preentrega-backend3.onrender.com/api-docs)

---

## 🌐 Despliegue

URL de la API desplegada en Render:  
[https://preentrega-backend3.onrender.com](https://preentrega-backend3.onrender.com)

---

## 🤖 Estructura del proyecto

```
src/  
├── routes/          # Rutas de usuarios, mascotas y adopciones  
├── tests/           # Pruebas funcionales  
├── app.js           # Configuración principal del servidor  
└── utils/           # Swagger, middlewares, logger, etc.
```
