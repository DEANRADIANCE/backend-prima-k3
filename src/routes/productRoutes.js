// Routes untuk resource Product
// Mendefinisikan semua endpoint yang berhubungan dengan product

const express = require('express');
const productController = require('../controllers/productController');
const { validateId, validateProductInput, handleValidationErrors } = require('../middlewares/sanitizer');

const router = express.Router();

// GET /api/products - Ambil semua products
router.get('/', productController.getAllProducts);

// GET /api/products/:id - Ambil product berdasarkan ID
router.get('/:id', validateId, handleValidationErrors, productController.getProductById);

// POST /api/products - Buat product baru
router.post('/', validateProductInput, handleValidationErrors, productController.createProduct);

// PUT /api/products/:id - Update product berdasarkan ID
router.put('/:id', validateId, validateProductInput, handleValidationErrors, productController.updateProduct);

// DELETE /api/products/:id - Hapus product berdasarkan ID
router.delete('/:id', validateId, handleValidationErrors, productController.deleteProduct);

module.exports = router;
