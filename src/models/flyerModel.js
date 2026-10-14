const supabase = require('../config/supabase');

const getAllFlyer = async () => {
  const { data, error } = await supabase
    .from('flyer')
    .select('*');
  if (error) throw error;
  return data;
};

const getFlyerById = async (id) => {
  const { data, error } = await supabase
    .from('flyer')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createFlyer = async (flyerData) => {
  const { data, error } = await supabase
    .from('flyer')
    .insert([flyerData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateFlyer = async (id, flyerData) => {
  const { data, error } = await supabase
    .from('flyer')
    .update(flyerData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteFlyer = async (id) => {
  const { error } = await supabase
    .from('flyer')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllFlyer,
  getFlyerById,
  createFlyer,
  updateFlyer,
  deleteFlyer
};