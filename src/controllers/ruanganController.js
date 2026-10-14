const ruanganModel = require('../models/ruanganModel');

const getAllRuangan = async (req, res) => {
  try {
    const data = await ruanganModel.getAllRuangan();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getRuanganById = async (req, res) => {
  try {
    const data = await ruanganModel.getRuanganById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createRuangan = async (req, res) => {
  try {
    const data = await ruanganModel.createRuangan(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateRuangan = async (req, res) => {
  try {
    const data = await ruanganModel.updateRuangan(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteRuangan = async (req, res) => {
  try {
    await ruanganModel.deleteRuangan(req.params.id);
    res.json({ success: true, message: 'Ruangan deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllRuangan,
  getRuanganById,
  createRuangan,
  updateRuangan,
  deleteRuangan
};