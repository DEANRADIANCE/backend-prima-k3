const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, bookingController.getAllBooking);
router.get('/konseling', protect, bookingController.getBookingKonseling);
router.get('/penunjang', protect, bookingController.getBookingPenunjang);
router.get('/:id', protect, bookingController.getBookingById);
router.post('/', protect, bookingController.createBooking);
router.put('/:id', protect, bookingController.updateBooking);
router.delete('/:id', protect, bookingController.deleteBooking);

module.exports = router;