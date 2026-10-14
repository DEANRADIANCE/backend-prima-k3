const supabase = require('../config/supabase');

const getAllSuratSakit = async () => {
  const { data, error } = await supabase
    .from('surat_sakit')
    .select('*');
  if (error) throw error;
  return data;
};

const getSuratSakitById = async (id) => {
  const { data, error } = await supabase
    .from('surat_sakit')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createSuratSakit = async (suratData) => {
  const { data, error } = await supabase
    .from('surat_sakit')
    .insert([suratData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateSuratSakit = async (id, suratData) => {
  const { data, error } = await supabase
    .from('surat_sakit')
    .update(suratData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteSuratSakit = async (id) => {
  const { error } = await supabase
    .from('surat_sakit')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllSuratSakit,
  getSuratSakitById,
  createSuratSakit,
  updateSuratSakit,
  deleteSuratSakit
};