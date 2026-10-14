const express = require('express');
const router = express.Router();
const perizinanController = require('../controllers/perizinanController');

router.get('/', perizinanController.getAllPerizinan);
router.get('/:id', perizinanController.getPerizinanById);
router.post('/', perizinanController.createPerizinan);
router.put('/:id', perizinanController.updatePerizinan);
router.delete('/:id', perizinanController.deletePerizinan);

module.exports = router;