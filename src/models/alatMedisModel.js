const supabase = require('../config/supabase');

const getAllAlatMedis = async () => {
  const { data, error } = await supabase
    .from('alat_medis')
    .select('*');
  if (error) throw error;
  return data;
};

const getAlatMedisById = async (id) => {
  const { data, error } = await supabase
    .from('alat_medis')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createAlatMedis = async (alatData) => {
  const { data, error } = await supabase
    .from('alat_medis')
    .insert([alatData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateAlatMedis = async (id, alatData) => {
  const { data, error } = await supabase
    .from('alat_medis')
    .update(alatData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteAlatMedis = async (id) => {
  const { error } = await supabase
    .from('alat_medis')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllAlatMedis,
  getAlatMedisById,
  createAlatMedis,
  updateAlatMedis,
  deleteAlatMedis
};