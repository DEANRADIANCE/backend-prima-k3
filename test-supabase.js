require('dotenv').config();

const supabase = require('./src/config/supabase');

async function testConnection() {
  console.log('Testing Supabase connection...');

  if (!supabase) {
    console.error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.');
    process.exitCode = 1;
    return;
  }

  console.log('URL configured:', Boolean(process.env.SUPABASE_URL));
  console.log('Service-role key configured:', Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY));

  try {
    const { error } = await supabase.from('pasien').select('id').limit(1);
    
    if (error) {
      console.error('Supabase connection failed:', error.message);
      process.exitCode = 1;
      return;
    }
    
    console.log('Connection successful!');
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exitCode = 1;
  }
}

testConnection();