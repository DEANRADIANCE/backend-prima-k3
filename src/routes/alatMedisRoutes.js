const express = require('express');
const router = express.Router();
const alatMedisController = require('../controllers/alatMedisController');

router.get('/', alatMedisController.getAllAlatMedis);
router.get('/:id', alatMedisController.getAlatMedisById);
router.post('/', alatMedisController.createAlatMedis);
router.put('/:id', alatMedisController.updateAlatMedis);
router.delete('/:id', alatMedisController.deleteAlatMedis);

module.exports = router;