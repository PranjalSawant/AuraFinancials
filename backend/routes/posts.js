const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the MySQL connection

// Get all posts
router.get('/', (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
  db.query(query, [title, content], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ id: result.insertId });
  });
});

module.exports = router;
