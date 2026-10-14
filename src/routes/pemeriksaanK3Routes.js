const express = require('express');
const router = express.Router();
const pemeriksaanK3Controller = require('../controllers/pemeriksaanK3Controller');

router.get('/', pemeriksaanK3Controller.getAllPemeriksaanK3);
router.get('/:id', pemeriksaanK3Controller.getPemeriksaanK3ById);
router.post('/', pemeriksaanK3Controller.createPemeriksaanK3);
router.put('/:id', pemeriksaanK3Controller.updatePemeriksaanK3);
router.delete('/:id', pemeriksaanK3Controller.deletePemeriksaanK3);

module.exports = router;