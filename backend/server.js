// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Endpoint to Test
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const postRoutes = require('./routes/posts'); // Import the posts route
app.use('/api/posts', postRoutes); // Use the posts route
