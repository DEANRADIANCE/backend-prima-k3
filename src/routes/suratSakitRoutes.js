const express = require('express');
const router = express.Router();
const suratSakitController = require('../controllers/suratSakitController');

router.get('/', suratSakitController.getAllSuratSakit);
router.get('/:id', suratSakitController.getSuratSakitById);
router.post('/', suratSakitController.createSuratSakit);
router.put('/:id', suratSakitController.updateSuratSakit);
router.delete('/:id', suratSakitController.deleteSuratSakit);

module.exports = router;