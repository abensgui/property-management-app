const db = require('../models/db');

// Add a new tenant
const addTenant = (req, res) => {
  const { name, contact, property_id } = req.body;
  const query = `INSERT INTO tenants (name, contact, property_id) VALUES (?, ?, ?)`;

  db.run(query, [name, contact, property_id], function (err) {
    if (err) return res.status(500).send('Error adding tenant');
    res.status(201).send({ id: this.lastID });
  });
};

// Get all tenants
const getTenants = (req, res) => {
  const query = `SELECT * FROM tenants`;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).send('Error fetching tenants');
    res.json(rows);
  });
};

// Update a tenant
const updateTenant = (req, res) => {
  const { id } = req.params;
  const { name, contact, property_id } = req.body;
  const query = `UPDATE tenants SET name = ?, contact = ?, property_id = ? WHERE id = ?`;

  db.run(query, [name, contact, property_id, id], function (err) {
    if (err) return res.status(500).send('Error updating tenant');
    res.status(200).send('Tenant updated successfully');
  });
};

// Delete a tenant
const deleteTenant = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM tenants WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) return res.status(500).send('Error deleting tenant');
    res.status(200).send('Tenant deleted successfully');
  });
};

module.exports = { addTenant, getTenants, updateTenant, deleteTenant };
