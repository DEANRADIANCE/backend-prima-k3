const supabase = require('../config/supabase');

const getAllBooking = async () => {
  const { data, error } = await supabase
    .from('booking')
    .select('*');
  if (error) throw error;
  return data;
};

const getBookingById = async (id) => {
  const { data, error } = await supabase
    .from('booking')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const getBookingByType = async (type) => {
  const { data, error } = await supabase
    .from('booking')
    .select('*')
    .eq('type', type);
  if (error) throw error;
  return data;
};

const createBooking = async (bookingData) => {
  const { data, error } = await supabase
    .from('booking')
    .insert([bookingData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateBooking = async (id, bookingData) => {
  const { data, error } = await supabase
    .from('booking')
    .update(bookingData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteBooking = async (id) => {
  const { error } = await supabase
    .from('booking')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllBooking,
  getBookingById,
  getBookingByType,
  createBooking,
  updateBooking,
  deleteBooking
};