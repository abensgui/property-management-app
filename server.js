const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');

const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Swagger setup using swagger.yaml
const swaggerDocument = yaml.load(fs.readFileSync('./docs/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', propertyRoutes);
app.use('/api', tenantRoutes);
app.use('/api', paymentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
