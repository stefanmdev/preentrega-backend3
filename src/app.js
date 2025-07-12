import 'dotenv/config';            
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter      from './routes/users.router.js';
import petsRouter       from './routes/pets.router.js';
import adoptionsRouter  from './routes/adoptions.router.js'; 
import sessionsRouter   from './routes/sessions.router.js';
import mocksRouter      from './routes/mocks.router.js';
import setupSwagger     from './utils/swagger.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

setupSwagger(app);

// Rutas
app.get('/', (req, res) => {
  res.send('🏠 Bienvenido a mi API de Backend III...');
});

app.use('/api/users',     usersRouter);
app.use('/api/pets',      petsRouter);
app.use('/api/adoptions', adoptionsRouter); 
app.use('/api/sessions',  sessionsRouter);
app.use('/api/mocks',     mocksRouter);

// Conexión a MongoDB
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB conectado');
    app.listen(PORT, () => {
      console.log(`🚀 Server escuchando en http://localhost:${PORT}`);
      console.log(`📚 API Docs en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar MongoDB:', err);
    process.exit(1);
  });

export default app;