// Controller untuk Riwayat Medis
// Berisi logic untuk menangani request riwayat medis

const medicalRecordService = require('../services/medicalRecordService');

const getAllMedicalRecords = async (req, res, next) => {
  try {
    const medicalRecords = await medicalRecordService.getAllMedicalRecords();
    res.json({
      success: true,
      data: medicalRecords
    });
  } catch (error) {
    next(error);
  }
};

const getMedicalRecordById = async (req, res, next) => {
  try {
    const medicalRecord = await medicalRecordService.getMedicalRecordById(req.params.id);
    if (!medicalRecord) {
      return res.status(404).json({
        success: false,
        message: 'Riwayat medis tidak ditemukan'
      });
    }
    res.json({
      success: true,
      data: medicalRecord
    });
  } catch (error) {
    next(error);
  }
};

const createMedicalRecord = async (req, res, next) => {
  try {
    const newMedicalRecord = await medicalRecordService.createMedicalRecord(req.body);
    res.status(201).json({
      success: true,
      message: 'Riwayat medis berhasil dibuat',
      data: newMedicalRecord
    });
  } catch (error) {
    next(error);
  }
};

const updateMedicalRecord = async (req, res, next) => {
  try {
    const updatedMedicalRecord = await medicalRecordService.updateMedicalRecord(req.params.id, req.body);
    if (!updatedMedicalRecord) {
      return res.status(404).json({
        success: false,
        message: 'Riwayat medis tidak ditemukan'
      });
    }
    res.json({
      success: true,
      message: 'Riwayat medis berhasil diupdate',
      data: updatedMedicalRecord
    });
  } catch (error) {
    next(error);
  }
};

const deleteMedicalRecord = async (req, res, next) => {
  try {
    const deleted = await medicalRecordService.deleteMedicalRecord(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Riwayat medis tidak ditemukan'
      });
    }
    res.json({
      success: true,
      message: 'Riwayat medis berhasil dihapus'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMedicalRecords,
  getMedicalRecordById,
  createMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord
};