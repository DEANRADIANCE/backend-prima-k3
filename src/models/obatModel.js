const supabase = require('../config/supabase');

const getAllObat = async () => {
  const { data, error } = await supabase
    .from('obat')
    .select('*');
  if (error) throw error;
  return data;
};

const getObatById = async (id) => {
  const { data, error } = await supabase
    .from('obat')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createObat = async (obatData) => {
  const { data, error } = await supabase
    .from('obat')
    .insert([obatData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateObat = async (id, obatData) => {
  const { data, error } = await supabase
    .from('obat')
    .update(obatData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteObat = async (id) => {
  const { error } = await supabase
    .from('obat')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllObat,
  getObatById,
  createObat,
  updateObat,
  deleteObat
};