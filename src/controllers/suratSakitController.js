const suratSakitModel = require('../models/suratSakitModel');

const getAllSuratSakit = async (req, res) => {
  try {
    const data = await suratSakitModel.getAllSuratSakit();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSuratSakitById = async (req, res) => {
  try {
    const data = await suratSakitModel.getSuratSakitById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createSuratSakit = async (req, res) => {
  try {
    const data = await suratSakitModel.createSuratSakit(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateSuratSakit = async (req, res) => {
  try {
    const data = await suratSakitModel.updateSuratSakit(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteSuratSakit = async (req, res) => {
  try {
    await suratSakitModel.deleteSuratSakit(req.params.id);
    res.json({ success: true, message: 'Surat sakit deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllSuratSakit,
  getSuratSakitById,
  createSuratSakit,
  updateSuratSakit,
  deleteSuratSakit
};