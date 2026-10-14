const express = require('express');
const router = express.Router();
const ruanganController = require('../controllers/ruanganController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, ruanganController.getAllRuangan);
router.get('/:id', protect, ruanganController.getRuanganById);
router.post('/', protect, ruanganController.createRuangan);
router.put('/:id', protect, ruanganController.updateRuangan);
router.delete('/:id', protect, ruanganController.deleteRuangan);

module.exports = router;