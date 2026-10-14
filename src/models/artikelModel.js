const supabase = require('../config/supabase');

const getAllArtikel = async () => {
  const { data, error } = await supabase
    .from('artikel')
    .select('*');
  if (error) throw error;
  return data;
};

const getArtikelById = async (id) => {
  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createArtikel = async (artikelData) => {
  const { data, error } = await supabase
    .from('artikel')
    .insert([artikelData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateArtikel = async (id, artikelData) => {
  const { data, error } = await supabase
    .from('artikel')
    .update(artikelData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteArtikel = async (id) => {
  const { error } = await supabase
    .from('artikel')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllArtikel,
  getArtikelById,
  createArtikel,
  updateArtikel,
  deleteArtikel
};