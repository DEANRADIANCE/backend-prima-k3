const express = require('express');
const router = express.Router();
const pemeriksaanK3Controller = require('../controllers/pemeriksaanK3Controller');
const { protect } = require('../middlewares/auth');

router.get('/', protect, pemeriksaanK3Controller.getAllPemeriksaanK3);
router.get('/:id', protect, pemeriksaanK3Controller.getPemeriksaanK3ById);
router.post('/', protect, pemeriksaanK3Controller.createPemeriksaanK3);
router.put('/:id', protect, pemeriksaanK3Controller.updatePemeriksaanK3);
router.delete('/:id', protect, pemeriksaanK3Controller.deletePemeriksaanK3);

module.exports = router;