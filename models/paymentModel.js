const db = require('./db');

const Payment = {
  // Create a new payment
  create: (payment, callback) => {
    const { tenant_id, date, amount, settled } = payment;
    const query = `INSERT INTO payments (tenant_id, date, amount, settled) VALUES (?, ?, ?, ?)`;
    db.run(query, [tenant_id, date, amount, settled], function (err) {
      if (err) {
        console.error('Error adding payment:', err);
        callback(err);
      } else {
        callback(null, this.lastID);
      }
    });
  },

  // Get all payments
  findAll: (callback) => {
    const query = `SELECT * FROM payments`;
    db.all(query, [], (err, payments) => {
      if (err) {
        console.error('Error fetching payments:', err);
        callback(err);
      } else {
        callback(null, payments);
      }
    });
  },

  // Update a payment by ID
  updateById: (id, payment, callback) => {
    const { tenant_id, date, amount, settled } = payment;
    const query = `UPDATE payments SET tenant_id = ?, date = ?, amount = ?, settled = ? WHERE id = ?`;
    db.run(query, [tenant_id, date, amount, settled, id], function (err) {
      if (err) {
        console.error('Error updating payment:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  // Delete a payment by ID
  deleteById: (id, callback) => {
    const query = `DELETE FROM payments WHERE id = ?`;
    db.run(query, [id], function (err) {
      if (err) {
        console.error('Error deleting payment:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },
};

module.exports = Payment;
