require('dotenv').config();

const supabase = require('../config/supabase');

const seedAdmin = async () => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi. Isi SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY.');
  }

  const username = 'admin';
  const email = (process.env.ADMIN_EMAIL || 'admin@primak3.id').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || (
    process.env.NODE_ENV === 'production' ? '' : 'admin'
  );
  if (!password) {
    throw new Error('ADMIN_PASSWORD wajib diatur ketika menjalankan provisioning di production.');
  }

  const { data: existingProfile, error: profileLookupError } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)
    .maybeSingle();
  if (profileLookupError) throw profileLookupError;
  if (existingProfile) {
    console.log('Akun admin sudah tersedia; password tidak diubah.');
    return;
  }

  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { username, name: 'Administrator Prima K3', role: 'admin' }
  });
  if (authError) throw authError;

  const { error: insertError } = await supabase
    .from('users')
    .insert([{
      id: authData.user.id,
      username,
      email,
      full_name: 'Administrator Prima K3',
      role: 'admin'
    }]);

  if (insertError) {
    const { error: rollbackError } = await supabase.auth.admin.deleteUser(authData.user.id);
    if (rollbackError) {
      throw new Error(`Profil admin gagal dibuat: ${insertError.message}; akun Auth juga gagal dibersihkan: ${rollbackError.message}`);
    }
    throw insertError;
  }

  console.log('Akun admin berhasil diprovisikan. Ganti password awal sebelum penggunaan production.');
};

seedAdmin().catch((error) => {
  console.error('Gagal memprovisikan admin:', error.message);
  process.exitCode = 1;
});
