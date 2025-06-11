import 'dotenv/config';            // carga variables de entorno
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter      from './routes/users.router.js';
import petsRouter       from './routes/pets.router.js';
import adoptionsRouter  from './routes/adoption.router.js';
import sessionsRouter   from './routes/sessions.router.js';
import mocksRouter      from './routes/mocks.router.js';  // import del router mocks

const app = express();
app.get('/', (req, res) => {
  res.send('🏠 Bienvenido a mi API de Backend III...');
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rutas existentes
app.use('/api/users',     usersRouter);
app.use('/api/pets',      petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions',  sessionsRouter);

// Montar el router de mocks bajo /api/mocks
app.use('/api/mocks',     mocksRouter);

const PORT      = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

console.log('Mongo URL:', MONGO_URL);  // <-- checkeo rápido

// Conexión a Mongo y arranque del servidor
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Mongo conectado');
    app.listen(PORT, () => {
      console.log(`Server escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar Mongo:', err);
    process.exit(1);
  });

export default app;
