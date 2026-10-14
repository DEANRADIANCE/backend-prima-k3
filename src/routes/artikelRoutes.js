const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, artikelController.getAllArtikel);
router.get('/:id', protect, artikelController.getArtikelById);
router.post('/', protect, artikelController.createArtikel);
router.put('/:id', protect, artikelController.updateArtikel);
router.delete('/:id', protect, artikelController.deleteArtikel);

module.exports = router;