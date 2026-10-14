const express = require('express');
const router = express.Router();
const perizinanController = require('../controllers/perizinanController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, perizinanController.getAllPerizinan);
router.get('/:id', protect, perizinanController.getPerizinanById);
router.post('/', protect, perizinanController.createPerizinan);
router.put('/:id', protect, perizinanController.updatePerizinan);
router.delete('/:id', protect, perizinanController.deletePerizinan);

module.exports = router;