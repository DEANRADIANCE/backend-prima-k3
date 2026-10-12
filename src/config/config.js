// Konfigurasi aplikasi
// File ini menyimpan semua konfigurasi environment

module.exports = {
  // Port server
  port: process.env.PORT || 3000,
  
  // Environment (development, production, test)
  env: process.env.NODE_ENV || 'development',
  
  // API version
  apiVersion: 'v1',
  
  // Request timeout (ms)
  requestTimeout: 30000,
  
  // Max JSON body size
  maxJsonSize: '10kb',
  
  // Max URL-encoded body size
  maxUrlencodedSize: '10kb'
};
