const express = require('express');
const router = express.Router();
const flyerController = require('../controllers/flyerController');

router.get('/', flyerController.getAllFlyer);
router.get('/:id', flyerController.getFlyerById);
router.post('/', flyerController.createFlyer);
router.put('/:id', flyerController.updateFlyer);
router.delete('/:id', flyerController.deleteFlyer);

module.exports = router;