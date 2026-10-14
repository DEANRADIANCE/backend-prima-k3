const bookingModel = require('../models/bookingModel');

const getAllBooking = async (req, res) => {
  try {
    const data = await bookingModel.getAllBooking();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBookingKonseling = async (req, res) => {
  try {
    const data = await bookingModel.getBookingByType('konseling');
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBookingPenunjang = async (req, res) => {
  try {
    const data = await bookingModel.getBookingByType('penunjang');
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const data = await bookingModel.getBookingById(req.params.id);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const data = await bookingModel.createBooking(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const data = await bookingModel.updateBooking(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    await bookingModel.deleteBooking(req.params.id);
    res.json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllBooking,
  getBookingKonseling,
  getBookingPenunjang,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};