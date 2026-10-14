const express = require('express');
const router = express.Router();
const flyerController = require('../controllers/flyerController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, flyerController.getAllFlyer);
router.get('/:id', protect, flyerController.getFlyerById);
router.post('/', protect, flyerController.createFlyer);
router.put('/:id', protect, flyerController.updateFlyer);
router.delete('/:id', protect, flyerController.deleteFlyer);

module.exports = router;