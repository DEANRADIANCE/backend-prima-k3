const supabase = require('../config/supabase');

const getAllPemeriksaanK3 = async () => {
  const { data, error } = await supabase
    .from('pemeriksaan_k3')
    .select('*');
  if (error) throw error;
  return data;
};

const getPemeriksaanK3ById = async (id) => {
  const { data, error } = await supabase
    .from('pemeriksaan_k3')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createPemeriksaanK3 = async (data) => {
  const { data: result, error } = await supabase
    .from('pemeriksaan_k3')
    .insert([data])
    .select()
    .single();
  if (error) throw error;
  return result;
};

const updatePemeriksaanK3 = async (id, data) => {
  const { data: result, error } = await supabase
    .from('pemeriksaan_k3')
    .update(data)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return result;
};

const deletePemeriksaanK3 = async (id) => {
  const { error } = await supabase
    .from('pemeriksaan_k3')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllPemeriksaanK3,
  getPemeriksaanK3ById,
  createPemeriksaanK3,
  updatePemeriksaanK3,
  deletePemeriksaanK3
};