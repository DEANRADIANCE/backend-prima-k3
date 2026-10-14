const pemeriksaanK3Model = require('../models/pemeriksaanK3Model');

const getAllPemeriksaanK3 = async (req, res) => {
  try {
    const data = await pemeriksaanK3Model.getAllPemeriksaanK3();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPemeriksaanK3ById = async (req, res) => {
  try {
    const data = await pemeriksaanK3Model.getPemeriksaanK3ById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createPemeriksaanK3 = async (req, res) => {
  try {
    const data = await pemeriksaanK3Model.createPemeriksaanK3(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updatePemeriksaanK3 = async (req, res) => {
  try {
    const data = await pemeriksaanK3Model.updatePemeriksaanK3(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePemeriksaanK3 = async (req, res) => {
  try {
    await pemeriksaanK3Model.deletePemeriksaanK3(req.params.id);
    res.json({ success: true, message: 'Pemeriksaan K3 deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllPemeriksaanK3,
  getPemeriksaanK3ById,
  createPemeriksaanK3,
  updatePemeriksaanK3,
  deletePemeriksaanK3
};