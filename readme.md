# PreEntrega 1 – Backend III (CoderHouse)

Este repositorio contiene la implementación del módulo de **mocks**
---

## ⚙️ Configuración

1. **Clonar el repositorio** y entrar en la carpeta:

   ```bash
   git clone <repo-url>
   cd "PreEntrega1-Backend III"
   ```

2. **Crear** un archivo `.env` en la raíz con estas variables:

   ```ini
   MONGO_URL=<tu cadena de conexión MongoDB>
   PORT=8080
   ```

3. **Instalar dependencias**:

   ```bash
   npm install
   ```

---

## 🚀 Arrancar la aplicación

```bash
npm start
```

El servidor quedará escuchando en `http://localhost:8080`.

---

## 📚 Rutas disponibles

### Raíz

`GET /`\
Devuelve un mensaje de bienvenida.

### Mocks (`/api/mocks`)

- **GET** `/api/mocks/mockingpets?count=<n>`\
  Retorna `<n>` mascotas generadas (por defecto 10).

- **GET** `/api/mocks/mockingusers?count=<n>`\
  Retorna `<n>` usuarios generados (por defecto 50).

- **POST** `/api/mocks/generateData`\
  A través de los campos `users` y `pets` en el body JSON, genera e inserta en la BD las cantidades indicadas.

---

## 🔧 Colección de Postman

La colección para probar estas rutas está en `.collections/mocks-api.postman_collection.json`.\
Impórtala en Postman (v2.1) para ejecutar los ejemplos automáticos.



