const riwayatMedisModel = require('../models/riwayatMedisModel');

const getAllRiwayatMedis = async (req, res) => {
  try {
    const data = await riwayatMedisModel.getAllRiwayatMedis();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getRiwayatMedisById = async (req, res) => {
  try {
    const data = await riwayatMedisModel.getRiwayatMedisById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createRiwayatMedis = async (req, res) => {
  try {
    const data = await riwayatMedisModel.createRiwayatMedis(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateRiwayatMedis = async (req, res) => {
  try {
    const data = await riwayatMedisModel.updateRiwayatMedis(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteRiwayatMedis = async (req, res) => {
  try {
    await riwayatMedisModel.deleteRiwayatMedis(req.params.id);
    res.json({ success: true, message: 'Riwayat medis deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllRiwayatMedis,
  getRiwayatMedisById,
  createRiwayatMedis,
  updateRiwayatMedis,
  deleteRiwayatMedis
};