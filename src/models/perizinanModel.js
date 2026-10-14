const supabase = require('../config/supabase');

const getAllPerizinan = async () => {
  const { data, error } = await supabase
    .from('perizinan')
    .select('*');
  if (error) throw error;
  return data;
};

const getPerizinanById = async (id) => {
  const { data, error } = await supabase
    .from('perizinan')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createPerizinan = async (perizinanData) => {
  const { data, error } = await supabase
    .from('perizinan')
    .insert([perizinanData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updatePerizinan = async (id, perizinanData) => {
  const { data, error } = await supabase
    .from('perizinan')
    .update(perizinanData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deletePerizinan = async (id) => {
  const { error } = await supabase
    .from('perizinan')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllPerizinan,
  getPerizinanById,
  createPerizinan,
  updatePerizinan,
  deletePerizinan
};