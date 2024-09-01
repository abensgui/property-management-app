const express = require('express');
const router = express.Router();
const { addTenant, getTenants, updateTenant, deleteTenant } = require('../controllers/tenantController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/tenants', authenticateToken, addTenant);
router.get('/tenants', authenticateToken, getTenants);
router.put('/tenants/:id', authenticateToken, updateTenant);
router.delete('/tenants/:id', authenticateToken, deleteTenant);

module.exports = router;
