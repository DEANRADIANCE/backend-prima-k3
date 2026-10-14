const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, obatController.getAllObat);
router.get('/:id', protect, obatController.getObatById);
router.post('/', protect, obatController.createObat);
router.put('/:id', protect, obatController.updateObat);
router.delete('/:id', protect, obatController.deleteObat);

module.exports = router;