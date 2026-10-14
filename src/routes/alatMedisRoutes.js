const express = require('express');
const router = express.Router();
const alatMedisController = require('../controllers/alatMedisController');
const { protect } = require('../middlewares/auth');

router.get('/', protect, alatMedisController.getAllAlatMedis);
router.get('/:id', protect, alatMedisController.getAlatMedisById);
router.post('/', protect, alatMedisController.createAlatMedis);
router.put('/:id', protect, alatMedisController.updateAlatMedis);
router.delete('/:id', protect, alatMedisController.deleteAlatMedis);

module.exports = router;