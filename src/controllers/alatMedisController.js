const alatMedisModel = require('../models/alatMedisModel');

const getAllAlatMedis = async (req, res) => {
  try {
    const data = await alatMedisModel.getAllAlatMedis();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAlatMedisById = async (req, res) => {
  try {
    const data = await alatMedisModel.getAlatMedisById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createAlatMedis = async (req, res) => {
  try {
    const data = await alatMedisModel.createAlatMedis(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateAlatMedis = async (req, res) => {
  try {
    const data = await alatMedisModel.updateAlatMedis(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteAlatMedis = async (req, res) => {
  try {
    await alatMedisModel.deleteAlatMedis(req.params.id);
    res.json({ success: true, message: 'Alat medis deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllAlatMedis,
  getAlatMedisById,
  createAlatMedis,
  updateAlatMedis,
  deleteAlatMedis
};