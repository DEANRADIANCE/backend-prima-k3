const express = require('express');
const router = express.Router();
const riwayatMedisController = require('../controllers/riwayatMedisController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, riwayatMedisController.getAllRiwayatMedis);
router.get('/:id', protect, riwayatMedisController.getRiwayatMedisById);
router.post('/', protect, riwayatMedisController.createRiwayatMedis);
router.put('/:id', protect, riwayatMedisController.updateRiwayatMedis);
router.delete('/:id', protect, riwayatMedisController.deleteRiwayatMedis);

module.exports = router;