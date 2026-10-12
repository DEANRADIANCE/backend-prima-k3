// Routes untuk resource Riwayat Medis
// Mendefinisikan semua endpoint yang berhubungan dengan riwayat medis

const express = require('express');
const medicalRecordController = require('../controllers/medicalRecordController');
const {
  validateId,
  validateMedicalRecordInput,
  handleValidationErrors
} = require('../middlewares/sanitizer');

const router = express.Router();

// GET /api/medical-records - Ambil semua riwayat medis
router.get('/', medicalRecordController.getAllMedicalRecords);

// GET /api/medical-records/:id - Ambil riwayat medis berdasarkan ID
router.get('/:id', validateId, handleValidationErrors, medicalRecordController.getMedicalRecordById);

// POST /api/medical-records - Buat riwayat medis baru
router.post('/', validateMedicalRecordInput, handleValidationErrors, medicalRecordController.createMedicalRecord);

// PUT /api/medical-records/:id - Update riwayat medis berdasarkan ID
router.put('/:id', validateId, validateMedicalRecordInput, handleValidationErrors, medicalRecordController.updateMedicalRecord);

// DELETE /api/medical-records/:id - Hapus riwayat medis berdasarkan ID
router.delete('/:id', validateId, handleValidationErrors, medicalRecordController.deleteMedicalRecord);

module.exports = router;