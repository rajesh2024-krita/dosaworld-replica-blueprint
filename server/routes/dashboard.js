
const express = require('express');
const { pool } = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get dashboard statistics
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    // Get today's date
    const today = new Date().toISOString().split('T')[0];

    // Get sales data
    const [salesData] = await pool.execute(`
      SELECT 
        COUNT(*) as total_orders,
        COALESCE(SUM(total_amount), 0) as total_revenue
      FROM bills 
      WHERE DATE(created_at) = ?
    `, [today]);

    // Get reservations data
    const [reservationsData] = await pool.execute(`
      SELECT 
        COUNT(*) as total_reservations,
        SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) as confirmed_reservations
      FROM reservations 
      WHERE reservation_date = ?
    `, [today]);

    // Get upcoming reservations
    const [upcomingReservations] = await pool.execute(`
      SELECT * FROM reservations 
      WHERE reservation_date = ? AND status = 'confirmed'
      ORDER BY reservation_time ASC
      LIMIT 5
    `, [today]);

    // Get low stock items
    const [lowStockItems] = await pool.execute(`
      SELECT * FROM inventory 
      WHERE current_stock <= minimum_stock
      ORDER BY current_stock ASC
      LIMIT 5
    `);

    // Get recent bills
    const [recentBills] = await pool.execute(`
      SELECT * FROM bills 
      ORDER BY created_at DESC
      LIMIT 5
    `);

    const stats = {
      todaySales: salesData[0]?.total_revenue || 0,
      todayOrders: salesData[0]?.total_orders || 0,
      todayReservations: reservationsData[0]?.total_reservations || 0,
      confirmedReservations: reservationsData[0]?.confirmed_reservations || 0,
      upcomingReservations: upcomingReservations || [],
      lowStockItems: lowStockItems || [],
      recentBills: recentBills || []
    };

    res.json(stats);
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get sales chart data
router.get('/sales-chart', authenticateToken, async (req, res) => {
  try {
    const { period = 'week' } = req.query;
    
    let dateCondition = '';
    let groupBy = '';
    
    if (period === 'week') {
      dateCondition = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
      groupBy = 'DATE(created_at)';
    } else if (period === 'month') {
      dateCondition = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
      groupBy = 'DATE(created_at)';
    } else if (period === 'year') {
      dateCondition = 'WHERE created_at >= DATE_SUB(NOW(), INTERVAL 12 MONTH)';
      groupBy = 'DATE_FORMAT(created_at, "%Y-%m")';
    }

    const [chartData] = await pool.execute(`
      SELECT 
        ${groupBy} as date,
        COUNT(*) as orders,
        COALESCE(SUM(total_amount), 0) as revenue
      FROM bills 
      ${dateCondition}
      GROUP BY ${groupBy}
      ORDER BY date ASC
    `);

    res.json(chartData || []);
  } catch (error) {
    console.error('Sales chart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
