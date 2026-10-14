const express = require('express');
const router = express.Router();
const suratSakitController = require('../controllers/suratSakitController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, suratSakitController.getAllSuratSakit);
router.get('/:id', protect, suratSakitController.getSuratSakitById);
router.post('/', protect, suratSakitController.createSuratSakit);
router.put('/:id', protect, suratSakitController.updateSuratSakit);
router.delete('/:id', protect, suratSakitController.deleteSuratSakit);

module.exports = router;