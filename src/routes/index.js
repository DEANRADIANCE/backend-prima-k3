// Router utama
// File ini mengumpulkan semua route dari module lain

const express = require('express');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API berjalan dengan baik',
    timestamp: new Date().toISOString()
  });
});

// Gunakan route modules
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
