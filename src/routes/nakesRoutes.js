const express = require('express');
const router = express.Router();
const nakesController = require('../controllers/nakesController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, nakesController.getAllNakes);
router.get('/:id', protect, nakesController.getNakesById);
router.post('/', protect, nakesController.createNakes);
router.put('/:id', protect, nakesController.updateNakes);
router.delete('/:id', protect, nakesController.deleteNakes);

module.exports = router;