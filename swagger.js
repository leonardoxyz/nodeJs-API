const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Node Js - API',
        version: '1.0.0', 
        description: 'This application still under development!',
    },
    servers: [
        {
            url: `http://localhost:3300`,
            description: 'Local server'
        }
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerDocs;