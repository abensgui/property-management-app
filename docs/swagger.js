const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Property Management API',
      version: '1.0.0',
      description: 'API for managing properties, tenants, and rental payments',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['swagger.yaml'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
