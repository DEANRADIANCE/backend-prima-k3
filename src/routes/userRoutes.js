// Routes untuk resource User
// Mendefinisikan semua endpoint yang berhubungan dengan user

const express = require('express');
const userController = require('../controllers/userController');
const { validateId, validateUserInput, handleValidationErrors } = require('../middlewares/sanitizer');

const router = express.Router();

// GET /api/users - Ambil semua users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Ambil user berdasarkan ID
router.get('/:id', validateId, handleValidationErrors, userController.getUserById);

// POST /api/users - Buat user baru
router.post('/', validateUserInput, handleValidationErrors, userController.createUser);

// PUT /api/users/:id - Update user berdasarkan ID
router.put('/:id', validateId, validateUserInput, handleValidationErrors, userController.updateUser);

// DELETE /api/users/:id - Hapus user berdasarkan ID
router.delete('/:id', validateId, handleValidationErrors, userController.deleteUser);

module.exports = router;
