const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/konseling', bookingController.getBookingKonseling);
router.get('/penunjang', bookingController.getBookingPenunjang);
router.get('/:id', bookingController.getBookingById);
router.post('/', bookingController.createBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;