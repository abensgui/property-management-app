const db = require('./db');

const Tenant = {
  // Create a new tenant
  create: (tenant, callback) => {
    const { name, contact, property_id } = tenant;
    const query = `INSERT INTO tenants (name, contact, property_id) VALUES (?, ?, ?)`;
    db.run(query, [name, contact, property_id], function (err) {
      if (err) {
        console.error('Error adding tenant:', err);
        callback(err);
      } else {
        callback(null, this.lastID);
      }
    });
  },

  // Get all tenants
  findAll: (callback) => {
    const query = `SELECT * FROM tenants`;
    db.all(query, [], (err, tenants) => {
      if (err) {
        console.error('Error fetching tenants:', err);
        callback(err);
      } else {
        callback(null, tenants);
      }
    });
  },

  // Update a tenant by ID
  updateById: (id, tenant, callback) => {
    const { name, contact, property_id } = tenant;
    const query = `UPDATE tenants SET name = ?, contact = ?, property_id = ? WHERE id = ?`;
    db.run(query, [name, contact, property_id, id], function (err) {
      if (err) {
        console.error('Error updating tenant:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  // Delete a tenant by ID
  deleteById: (id, callback) => {
    const query = `DELETE FROM tenants WHERE id = ?`;
    db.run(query, [id], function (err) {
      if (err) {
        console.error('Error deleting tenant:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },
};

module.exports = Tenant;
