const express = require('express');
const router = express.Router();
const { addProperty, getProperties, updateProperty, deleteProperty } = require('../controllers/propertyController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/properties', authenticateToken, addProperty);
router.get('/properties', authenticateToken, getProperties);
router.put('/properties/:id', authenticateToken, updateProperty);
router.delete('/properties/:id', authenticateToken, deleteProperty);

module.exports = router;
