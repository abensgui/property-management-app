const db = require('./db');

const Property = {
  // Create a new property
  create: (property, callback) => {
    const { name, address, type, units, rental_cost } = property;
    const query = `INSERT INTO properties (name, address, type, units, rental_cost) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [name, address, type, units, rental_cost], function (err) {
      if (err) {
        console.error('Error adding property:', err);
        callback(err);
      } else {
        callback(null, this.lastID);
      }
    });
  },

  // Get all properties
  findAll: (callback) => {
    const query = `SELECT * FROM properties`;
    db.all(query, [], (err, properties) => {
      if (err) {
        console.error('Error fetching properties:', err);
        callback(err);
      } else {
        callback(null, properties);
      }
    });
  },

  // Update a property by ID
  updateById: (id, property, callback) => {
    const { name, address, type, units, rental_cost } = property;
    const query = `UPDATE properties SET name = ?, address = ?, type = ?, units = ?, rental_cost = ? WHERE id = ?`;
    db.run(query, [name, address, type, units, rental_cost, id], function (err) {
      if (err) {
        console.error('Error updating property:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  // Delete a property by ID
  deleteById: (id, callback) => {
    const query = `DELETE FROM properties WHERE id = ?`;
    db.run(query, [id], function (err) {
      if (err) {
        console.error('Error deleting property:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },
};

module.exports = Property;
