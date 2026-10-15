const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middlewares/auth');

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/profile', protect, authController.profile);
router.post('/logout', protect, authController.logout);

module.exports = router;