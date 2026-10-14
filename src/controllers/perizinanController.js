const perizinanModel = require('../models/perizinanModel');

const getAllPerizinan = async (req, res) => {
  try {
    const data = await perizinanModel.getAllPerizinan();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPerizinanById = async (req, res) => {
  try {
    const data = await perizinanModel.getPerizinanById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createPerizinan = async (req, res) => {
  try {
    const data = await perizinanModel.createPerizinan(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updatePerizinan = async (req, res) => {
  try {
    const data = await perizinanModel.updatePerizinan(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePerizinan = async (req, res) => {
  try {
    await perizinanModel.deletePerizinan(req.params.id);
    res.json({ success: true, message: 'Perizinan deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllPerizinan,
  getPerizinanById,
  createPerizinan,
  updatePerizinan,
  deletePerizinan
};