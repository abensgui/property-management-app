const db = require('../models/db');

// Add a new property
const addProperty = (req, res) => {
  const { name, address, type, units, rental_cost } = req.body;
  const query = `INSERT INTO properties (name, address, type, units, rental_cost) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [name, address, type, units, rental_cost], function (err) {
    if (err) return res.status(500).send('Error adding property');
    res.status(201).send({ id: this.lastID });
  });
};

// Get all properties
const getProperties = (req, res) => {
  const query = `SELECT * FROM properties`;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).send('Error fetching properties');
    res.json(rows);
  });
};

// Update a property
const updateProperty = (req, res) => {
  const { id } = req.params;
  const { name, address, type, units, rental_cost } = req.body;
  const query = `UPDATE properties SET name = ?, address = ?, type = ?, units = ?, rental_cost = ? WHERE id = ?`;

  db.run(query, [name, address, type, units, rental_cost, id], function (err) {
    if (err) return res.status(500).send('Error updating property');
    res.status(200).send('Property updated successfully');
  });
};

// Delete a property
const deleteProperty = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM properties WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) return res.status(500).send('Error deleting property');
    res.status(200).send('Property deleted successfully');
  });
};

module.exports = { addProperty, getProperties, updateProperty, deleteProperty };
