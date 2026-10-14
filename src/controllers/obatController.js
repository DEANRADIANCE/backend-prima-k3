const obatModel = require('../models/obatModel');

const getAllObat = async (req, res) => {
  try {
    const data = await obatModel.getAllObat();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getObatById = async (req, res) => {
  try {
    const data = await obatModel.getObatById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createObat = async (req, res) => {
  try {
    const data = await obatModel.createObat(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateObat = async (req, res) => {
  try {
    const data = await obatModel.updateObat(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteObat = async (req, res) => {
  try {
    await obatModel.deleteObat(req.params.id);
    res.json({ success: true, message: 'Obat deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllObat,
  getObatById,
  createObat,
  updateObat,
  deleteObat
};