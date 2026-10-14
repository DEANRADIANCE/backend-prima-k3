const supabase = require('./src/config/supabase');

async function testConnection() {
  console.log('Testing Supabase connection...');
  console.log('URL:', process.env.SUPABASE_URL);
  console.log('Key:', process.env.SUPABASE_ANON_KEY ? 'Set' : 'Not set');
  
  try {
    const { data, error } = await supabase.from('pasien').select('count');
    
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    
    console.log('Connection successful!');
    console.log('Data:', data);
  } catch (err) {
    console.error('Connection failed:', err.message);
  }
}

testConnection();