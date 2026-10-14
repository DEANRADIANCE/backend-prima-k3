const supabase = require('../config/supabase');

const getAllPasien = async () => {
  const { data, error } = await supabase
    .from('pasien')
    .select('*');
  if (error) throw error;
  return data;
};

const getPasienById = async (id) => {
  const { data, error } = await supabase
    .from('pasien')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createPasien = async (pasienData) => {
  const { data, error } = await supabase
    .from('pasien')
    .insert([pasienData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updatePasien = async (id, pasienData) => {
  const { data, error } = await supabase
    .from('pasien')
    .update(pasienData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deletePasien = async (id) => {
  const { error } = await supabase
    .from('pasien')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllPasien,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien
};