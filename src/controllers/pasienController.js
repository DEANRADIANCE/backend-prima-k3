const pasienModel = require('../models/pasienModel');

const getAllPasien = async (req, res) => {
  try {
    const data = await pasienModel.getAllPasien();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPasienById = async (req, res) => {
  try {
    const data = await pasienModel.getPasienById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createPasien = async (req, res) => {
  try {
    const data = await pasienModel.createPasien(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updatePasien = async (req, res) => {
  try {
    const data = await pasienModel.updatePasien(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePasien = async (req, res) => {
  try {
    await pasienModel.deletePasien(req.params.id);
    res.json({ success: true, message: 'Pasien deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllPasien,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien
};