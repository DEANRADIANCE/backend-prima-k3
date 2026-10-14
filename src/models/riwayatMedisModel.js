const supabase = require('../config/supabase');

const getAllRiwayatMedis = async () => {
  const { data, error } = await supabase
    .from('riwayat_medis')
    .select('*');
  if (error) throw error;
  return data;
};

const getRiwayatMedisById = async (id) => {
  const { data, error } = await supabase
    .from('riwayat_medis')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createRiwayatMedis = async (recordData) => {
  const { data, error } = await supabase
    .from('riwayat_medis')
    .insert([recordData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateRiwayatMedis = async (id, recordData) => {
  const { data, error } = await supabase
    .from('riwayat_medis')
    .update(recordData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteRiwayatMedis = async (id) => {
  const { error } = await supabase
    .from('riwayat_medis')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllRiwayatMedis,
  getRiwayatMedisById,
  createRiwayatMedis,
  updateRiwayatMedis,
  deleteRiwayatMedis
};