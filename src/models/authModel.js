const supabase = require('../config/supabase');

const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) throw error;
  return data;
};

const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return true;
};

module.exports = {
  login,
  getProfile,
  logout
};