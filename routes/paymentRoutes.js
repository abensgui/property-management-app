const express = require('express');
const router = express.Router();
const { addPayment, getPayments, updatePayment, deletePayment } = require('../controllers/paymentController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/payments', authenticateToken, addPayment);
router.get('/payments', authenticateToken, getPayments);
router.put('/payments/:id', authenticateToken, updatePayment);
router.delete('/payments/:id', authenticateToken, deletePayment);

module.exports = router;
