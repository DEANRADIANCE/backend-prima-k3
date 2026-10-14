const flyerModel = require('../models/flyerModel');

const getAllFlyer = async (req, res) => {
  try {
    const data = await flyerModel.getAllFlyer();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getFlyerById = async (req, res) => {
  try {
    const data = await flyerModel.getFlyerById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createFlyer = async (req, res) => {
  try {
    const data = await flyerModel.createFlyer(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateFlyer = async (req, res) => {
  try {
    const data = await flyerModel.updateFlyer(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteFlyer = async (req, res) => {
  try {
    await flyerModel.deleteFlyer(req.params.id);
    res.json({ success: true, message: 'Flyer deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllFlyer,
  getFlyerById,
  createFlyer,
  updateFlyer,
  deleteFlyer
};