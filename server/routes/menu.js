
const express = require('express');
const multer = require('multer');
const path = require('path');
const { pool } = require('../config/database');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/menu/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'menu-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Get all categories
router.get('/categories', authenticate, async (req, res) => {
  try {
    const [categories] = await pool.execute(
      'SELECT * FROM categories WHERE is_active = true ORDER BY name'
    );
    res.json(categories);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create category
router.post('/categories', authenticate, authorize(['admin', 'manager']), async (req, res) => {
  try {
    const { name, description } = req.body;
    
    const [result] = await pool.execute(
      'INSERT INTO categories (name, description) VALUES (?, ?)',
      [name, description]
    );
    
    res.status(201).json({
      message: 'Category created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Create category error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update category
router.put('/categories/:id', authenticate, authorize(['admin', 'manager']), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, is_active } = req.body;
    
    await pool.execute(
      'UPDATE categories SET name = ?, description = ?, is_active = ? WHERE id = ?',
      [name, description, is_active, id]
    );
    
    res.json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error('Update category error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete category
router.delete('/categories/:id', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if category has menu items
    const [menuItems] = await pool.execute(
      'SELECT COUNT(*) as count FROM menu_items WHERE category_id = ? AND is_active = true',
      [id]
    );
    
    if (menuItems[0].count > 0) {
      return res.status(400).json({ 
        message: 'Cannot delete category with active menu items' 
      });
    }
    
    await pool.execute('UPDATE categories SET is_active = false WHERE id = ?', [id]);
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Delete category error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all menu items
router.get('/items', authenticate, async (req, res) => {
  try {
    const [items] = await pool.execute(`
      SELECT m.*, c.name as category_name 
      FROM menu_items m
      LEFT JOIN categories c ON m.category_id = c.id
      WHERE m.is_active = true
      ORDER BY c.name, m.name
    `);
    res.json(items);
  } catch (error) {
    console.error('Get menu items error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create menu item
router.post('/items', authenticate, authorize(['admin', 'manager']), upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category_id, is_available } = req.body;
    const image_url = req.file ? `/uploads/menu/${req.file.filename}` : null;
    
    const [result] = await pool.execute(
      'INSERT INTO menu_items (name, description, price, category_id, image_url, is_available) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, price, category_id, image_url, is_available || true]
    );
    
    res.status(201).json({
      message: 'Menu item created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Create menu item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update menu item
router.put('/items/:id', authenticate, authorize(['admin', 'manager']), upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category_id, is_available, is_active } = req.body;
    
    let query = 'UPDATE menu_items SET name = ?, description = ?, price = ?, category_id = ?, is_available = ?, is_active = ?';
    let params = [name, description, price, category_id, is_available, is_active];
    
    if (req.file) {
      query += ', image_url = ?';
      params.push(`/uploads/menu/${req.file.filename}`);
    }
    
    query += ' WHERE id = ?';
    params.push(id);
    
    await pool.execute(query, params);
    res.json({ message: 'Menu item updated successfully' });
  } catch (error) {
    console.error('Update menu item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete menu item
router.delete('/items/:id', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('UPDATE menu_items SET is_active = false WHERE id = ?', [id]);
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error('Delete menu item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
