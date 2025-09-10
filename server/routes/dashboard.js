
const express = require('express');
const { pool } = require('../config/database');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Get dashboard data
router.get('/stats', authenticate, async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Sales stats
    const [salesStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_orders,
        COALESCE(SUM(total_amount), 0) as total_revenue,
        COALESCE(AVG(total_amount), 0) as avg_order_value
      FROM orders 
      WHERE DATE(created_at) = ? AND status = 'completed'
    `, [today]);

    // Reservations stats
    const [reservationStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_reservations,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_reservations,
        SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) as confirmed_reservations
      FROM reservations 
      WHERE reservation_date = ?
    `, [today]);

    // Party bookings stats
    const [partyStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_parties,
        COALESCE(SUM(total_amount), 0) as party_revenue
      FROM party_bookings 
      WHERE event_date = ? AND status IN ('confirmed', 'completed')
    `, [today]);

    // Low stock alerts
    const [lowStockItems] = await pool.execute(`
      SELECT name, current_stock, min_stock_level, unit
      FROM inventory_items 
      WHERE current_stock <= min_stock_level AND is_active = true
      ORDER BY (current_stock / min_stock_level) ASC
      LIMIT 10
    `);

    // Recent orders
    const [recentOrders] = await pool.execute(`
      SELECT o.id, o.order_number, o.total_amount, o.status, o.created_at,
             COALESCE(t.table_number, 'Takeaway') as table_info
      FROM orders o
      LEFT JOIN tables t ON o.table_id = t.id
      ORDER BY o.created_at DESC
      LIMIT 5
    `);

    // Upcoming reservations
    const [upcomingReservations] = await pool.execute(`
      SELECT r.id, r.customer_name, r.customer_phone, r.reservation_time, 
             r.guest_count, t.table_number
      FROM reservations r
      JOIN tables t ON r.table_id = t.id
      WHERE r.reservation_date = ? AND r.status = 'confirmed'
      ORDER BY r.reservation_time ASC
      LIMIT 5
    `, [today]);

    res.json({
      sales: salesStats[0],
      reservations: reservationStats[0],
      parties: partyStats[0],
      lowStockItems,
      recentOrders,
      upcomingReservations
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
