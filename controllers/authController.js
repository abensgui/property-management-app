const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

// Register a new user
const register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.run(query, [username, hashedPassword], function (err) {
    if (err) return res.status(500).send('Error creating user');
    res.status(201).send({ id: this.lastID });
  });
};

// Login user and generate JWT token
const login = (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], (err, user) => {
    if (err || !user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};

module.exports = { register, login };
