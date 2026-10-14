const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, pasienController.getAllPasien);
router.get('/:id', protect, pasienController.getPasienById);
router.post('/', protect, pasienController.createPasien);
router.put('/:id', protect, pasienController.updatePasien);
router.delete('/:id', protect, pasienController.deletePasien);

module.exports = router;