const artikelModel = require('../models/artikelModel');

const getAllArtikel = async (req, res) => {
  try {
    const data = await artikelModel.getAllArtikel();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getArtikelById = async (req, res) => {
  try {
    const data = await artikelModel.getArtikelById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createArtikel = async (req, res) => {
  try {
    const data = await artikelModel.createArtikel(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateArtikel = async (req, res) => {
  try {
    const data = await artikelModel.updateArtikel(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteArtikel = async (req, res) => {
  try {
    await artikelModel.deleteArtikel(req.params.id);
    res.json({ success: true, message: 'Artikel deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllArtikel,
  getArtikelById,
  createArtikel,
  updateArtikel,
  deleteArtikel
};