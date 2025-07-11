import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Backend III - Users',
      version: '1.0.0',
      description: 'Documentación de endpoints del módulo de usuarios',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Servidor Local',
      },
    ],
  },
  apis: ['./src/routes/users.router.js', './src/docs/*.yaml'], // ruta donde están las anotaciones
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
