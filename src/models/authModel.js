const supabase = require('../config/supabase');

const login = async ({ username, email, password }) => {
  let loginEmail = email;

  if (!loginEmail && username) {
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('email')
      .eq('username', username.toLowerCase())
      .single();
    if (profileError) throw new Error('Username atau password salah.');
    loginEmail = profile.email;
  }

  if (!loginEmail || typeof password !== 'string' || password.length === 0) {
    throw new Error('Username/email dan password wajib diisi.');
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password
  });

  if (error) throw error;

  const { data: profile, error: profileError } = await supabase
    .from('users')
    .select('id, username, email, full_name, role')
    .eq('id', data.user.id)
    .single();
  if (profileError) throw profileError;

  return { ...data, profile };
};

const signup = async ({ username, email, password, name }) => {
  if (!username || !/^[a-zA-Z0-9_.-]{3,32}$/.test(username)) {
    throw new Error('Username harus terdiri dari 3-32 karakter huruf, angka, titik, garis, atau underscore.');
  }
  if (!email || typeof email !== 'string') {
    throw new Error('Email wajib diisi.');
  }
  if (typeof password !== 'string' || password.length < 8) {
    throw new Error('Password minimal 8 karakter.');
  }
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new Error('Nama lengkap minimal 2 karakter.');
  }

  const normalizedUsername = username.toLowerCase();
  if (normalizedUsername === 'admin') {
    throw new Error('Username admin hanya dapat digunakan oleh akun admin yang diprovisikan.');
  }
  const { data: existingUser, error: lookupError } = await supabase
    .from('users')
    .select('id')
    .eq('username', normalizedUsername)
    .maybeSingle();
  if (lookupError) throw lookupError;
  if (existingUser) throw new Error('Username sudah digunakan.');

  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: email.toLowerCase(),
    password,
    email_confirm: true,
    user_metadata: { username: normalizedUsername, name: name.trim(), role: 'user' }
  });
  if (authError) throw authError;

  const { data: profile, error: profileError } = await supabase
    .from('users')
    .insert([{
      id: authData.user.id,
      username: normalizedUsername,
      email: email.toLowerCase(),
      full_name: name.trim(),
      role: 'user'
    }])
    .select('id, username, email, full_name, role')
    .single();

  if (profileError) {
    const { error: rollbackError } = await supabase.auth.admin.deleteUser(authData.user.id);
    if (rollbackError) {
      throw new Error(`Profil gagal disimpan dan akun Auth tidak dapat dibersihkan: ${profileError.message}; ${rollbackError.message}`);
    }
    throw profileError;
  }

  return profile;
};

const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('id, username, email, full_name, role')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

const logout = async () => {
  return true;
};

module.exports = {
  login,
  signup,
  getProfile,
  logout
};