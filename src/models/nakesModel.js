const supabase = require('../config/supabase');

const getAllNakes = async () => {
  const { data, error } = await supabase
    .from('nakes')
    .select('*');
  if (error) throw error;
  return data;
};

const getNakesById = async (id) => {
  const { data, error } = await supabase
    .from('nakes')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const createNakes = async (nakesData) => {
  const { data, error } = await supabase
    .from('nakes')
    .insert([nakesData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateNakes = async (id, nakesData) => {
  const { data, error } = await supabase
    .from('nakes')
    .update(nakesData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteNakes = async (id) => {
  const { error } = await supabase
    .from('nakes')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};

module.exports = {
  getAllNakes,
  getNakesById,
  createNakes,
  updateNakes,
  deleteNakes
};