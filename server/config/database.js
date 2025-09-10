const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'restaurant_admin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000
});

// Initialize database and create tables
async function initializeDatabase() {
  try {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'restaurant_admin'}`);
    await connection.end();

    console.log('Database initialized successfully');

    // Test pool connection
    const testConnection = await pool.getConnection();
    console.log('Database connected successfully');
    testConnection.release();

  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

module.exports = { pool, initializeDatabase };