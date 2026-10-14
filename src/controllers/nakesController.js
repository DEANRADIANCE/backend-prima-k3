const nakesModel = require('../models/nakesModel');

const getAllNakes = async (req, res) => {
  try {
    const data = await nakesModel.getAllNakes();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getNakesById = async (req, res) => {
  try {
    const data = await nakesModel.getNakesById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createNakes = async (req, res) => {
  try {
    const data = await nakesModel.createNakes(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateNakes = async (req, res) => {
  try {
    const data = await nakesModel.updateNakes(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteNakes = async (req, res) => {
  try {
    await nakesModel.deleteNakes(req.params.id);
    res.json({ success: true, message: 'Nakes deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllNakes,
  getNakesById,
  createNakes,
  updateNakes,
  deleteNakes
};