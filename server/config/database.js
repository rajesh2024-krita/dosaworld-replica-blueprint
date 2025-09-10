
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Database initialization
const initDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    // Create database if not exists
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await connection.end();

    // Create tables
    await createTables();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

const createTables = async () => {
  const queries = [
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM('admin', 'manager', 'cashier', 'stock_manager') NOT NULL,
      full_name VARCHAR(100) NOT NULL,
      phone VARCHAR(20),
      is_active BOOLEAN DEFAULT true,
      reset_token VARCHAR(255),
      reset_token_expires DATETIME,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS menu_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10,2) NOT NULL,
      category_id INT,
      image_url VARCHAR(255),
      is_available BOOLEAN DEFAULT true,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS tables (
      id INT AUTO_INCREMENT PRIMARY KEY,
      table_number VARCHAR(10) UNIQUE NOT NULL,
      capacity INT NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS reservations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      customer_name VARCHAR(100) NOT NULL,
      customer_phone VARCHAR(20) NOT NULL,
      customer_email VARCHAR(100),
      table_id INT,
      reservation_date DATE NOT NULL,
      reservation_time TIME NOT NULL,
      guest_count INT NOT NULL,
      status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
      special_requests TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (table_id) REFERENCES tables(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS party_packages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price_per_person DECIMAL(10,2) NOT NULL,
      min_guests INT NOT NULL,
      max_guests INT NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS party_bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      customer_name VARCHAR(100) NOT NULL,
      customer_phone VARCHAR(20) NOT NULL,
      customer_email VARCHAR(100),
      package_id INT,
      event_date DATE NOT NULL,
      event_time TIME NOT NULL,
      guest_count INT NOT NULL,
      total_amount DECIMAL(10,2) NOT NULL,
      advance_payment DECIMAL(10,2) DEFAULT 0,
      status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
      special_requirements TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (package_id) REFERENCES party_packages(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_number VARCHAR(20) UNIQUE NOT NULL,
      table_id INT,
      customer_name VARCHAR(100),
      customer_phone VARCHAR(20),
      subtotal DECIMAL(10,2) NOT NULL,
      discount_percentage DECIMAL(5,2) DEFAULT 0,
      discount_amount DECIMAL(10,2) DEFAULT 0,
      tax_amount DECIMAL(10,2) NOT NULL,
      total_amount DECIMAL(10,2) NOT NULL,
      payment_method ENUM('cash', 'card', 'upi') NOT NULL,
      status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
      created_by INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (table_id) REFERENCES tables(id),
      FOREIGN KEY (created_by) REFERENCES users(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      menu_item_id INT NOT NULL,
      quantity INT NOT NULL,
      unit_price DECIMAL(10,2) NOT NULL,
      total_price DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS inventory_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      unit VARCHAR(20) NOT NULL,
      current_stock DECIMAL(10,2) NOT NULL DEFAULT 0,
      min_stock_level DECIMAL(10,2) NOT NULL DEFAULT 0,
      unit_price DECIMAL(10,2) NOT NULL DEFAULT 0,
      supplier VARCHAR(100),
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS stock_transactions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      inventory_item_id INT NOT NULL,
      transaction_type ENUM('in', 'out') NOT NULL,
      quantity DECIMAL(10,2) NOT NULL,
      unit_price DECIMAL(10,2),
      total_amount DECIMAL(10,2),
      reference_type ENUM('purchase', 'usage', 'adjustment') NOT NULL,
      reference_id INT,
      notes TEXT,
      created_by INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (inventory_item_id) REFERENCES inventory_items(id),
      FOREIGN KEY (created_by) REFERENCES users(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS expenses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      category VARCHAR(50) NOT NULL,
      description TEXT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      expense_date DATE NOT NULL,
      created_by INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )`,
    
    `CREATE TABLE IF NOT EXISTS attendance (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      check_in_time DATETIME NOT NULL,
      check_out_time DATETIME,
      work_hours DECIMAL(4,2),
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`
  ];

  for (const query of queries) {
    await pool.execute(query);
  }

  // Insert default admin user
  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  try {
    await pool.execute(
      'INSERT IGNORE INTO users (username, email, password, role, full_name) VALUES (?, ?, ?, ?, ?)',
      ['admin', 'admin@restaurant.com', hashedPassword, 'admin', 'System Administrator']
    );
  } catch (error) {
    // User already exists
  }
};

module.exports = { pool, initDatabase };
