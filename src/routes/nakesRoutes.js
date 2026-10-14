const express = require('express');
const router = express.Router();
const nakesController = require('../controllers/nakesController');

router.get('/', nakesController.getAllNakes);
router.get('/:id', nakesController.getNakesById);
router.post('/', nakesController.createNakes);
router.put('/:id', nakesController.updateNakes);
router.delete('/:id', nakesController.deleteNakes);

module.exports = router;