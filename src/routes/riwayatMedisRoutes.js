const express = require('express');
const router = express.Router();
const riwayatMedisController = require('../controllers/riwayatMedisController');

router.get('/', riwayatMedisController.getAllRiwayatMedis);
router.get('/:id', riwayatMedisController.getRiwayatMedisById);
router.post('/', riwayatMedisController.createRiwayatMedis);
router.put('/:id', riwayatMedisController.updateRiwayatMedis);
router.delete('/:id', riwayatMedisController.deleteRiwayatMedis);

module.exports = router;