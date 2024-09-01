const db = require('../models/db');

// Add a new payment
const addPayment = (req, res) => {
  const { tenant_id, date, amount, settled } = req.body;
  const query = `INSERT INTO payments (tenant_id, date, amount, settled) VALUES (?, ?, ?, ?)`;

  db.run(query, [tenant_id, date, amount, settled], function (err) {
    if (err) return res.status(500).send('Error adding payment');
    res.status(201).send({ id: this.lastID });
  });
};

// Get all payments
const getPayments = (req, res) => {
  const query = `SELECT * FROM payments`;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).send('Error fetching payments');
    res.json(rows);
  });
};

// Update a payment
const updatePayment = (req, res) => {
  const { id } = req.params;
  const { tenant_id, date, amount, settled } = req.body;
  const query = `UPDATE payments SET tenant_id = ?, date = ?, amount = ?, settled = ? WHERE id = ?`;

  db.run(query, [tenant_id, date, amount, settled, id], function (err) {
    if (err) return res.status(500).send('Error updating payment');
    res.status(200).send('Payment updated successfully');
  });
};

// Delete a payment
const deletePayment = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM payments WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) return res.status(500).send('Error deleting payment');
    res.status(200).send('Payment deleted successfully');
  });
};

module.exports = { addPayment, getPayments, updatePayment, deletePayment };
