const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');

router.get('/', artikelController.getAllArtikel);
router.get('/:id', artikelController.getArtikelById);
router.post('/', artikelController.createArtikel);
router.put('/:id', artikelController.updateArtikel);
router.delete('/:id', artikelController.deleteArtikel);

module.exports = router;