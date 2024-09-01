const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Set up the SQLite database
const db = new sqlite3.Database(path.resolve(__dirname, 'property_management.db'), (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create tables if they do not exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      type TEXT NOT NULL,
      units INTEGER,
      rental_cost REAL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS tenants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contact TEXT NOT NULL,
      property_id INTEGER,
      FOREIGN KEY(property_id) REFERENCES properties(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tenant_id INTEGER,
      date TEXT NOT NULL,
      amount REAL,
      settled INTEGER DEFAULT 0,
      FOREIGN KEY(tenant_id) REFERENCES tenants(id)
    )
  `);
});

module.exports = db;
