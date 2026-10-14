const supabase = require('../config/supabase');

const getAllRuangan = async () => {
  const { data, error } = await supabase
    .from('ruangan')
    .select('*');
  if (error) throw error;
  return data;
};

const getRuanganById = async (id) => {
  const { data, error } = await supabase
    .from('ruangan')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createRuangan = async (ruanganData) => {
  const { data, error } = await supabase
    .from('ruangan')
    .insert([ruanganData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateRuangan = async (id, ruanganData) => {
  const { data, error } = await supabase
    .from('ruangan')
    .update(ruanganData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteRuangan = async (id) => {
  const { error } = await supabase
    .from('ruangan')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllRuangan,
  getRuanganById,
  createRuangan,
  updateRuangan,
  deleteRuangan
};