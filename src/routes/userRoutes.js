// Routes untuk resource User
// Mendefinisikan semua endpoint yang berhubungan dengan user

const express = require('express');
const userController = require('../controllers/userController');
const { validateId, validateUserInput, handleValidationErrors } = require('../middlewares/sanitizer');
const { protect, requireAdmin } = require('../middlewares/auth');

const router = express.Router();

// GET /api/users - Ambil semua users
router.get('/', protect, requireAdmin, userController.getAllUsers);

// GET /api/users/:id - Ambil user berdasarkan ID
router.get('/:id', protect, requireAdmin, validateId, handleValidationErrors, userController.getUserById);

// POST /api/users - Buat user baru
router.post('/', protect, requireAdmin, validateUserInput, handleValidationErrors, userController.createUser);

// PUT /api/users/:id - Update user berdasarkan ID
router.put('/:id', protect, requireAdmin, validateId, validateUserInput, handleValidationErrors, userController.updateUser);

// DELETE /api/users/:id - Hapus user berdasarkan ID
router.delete('/:id', protect, requireAdmin, validateId, handleValidationErrors, userController.deleteUser);

module.exports = router;
