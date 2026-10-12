// Konfigurasi aplikasi
// File ini menyimpan semua konfigurasi environment

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  apiVersion: 'v1',
  requestTimeout: parseInt(process.env.REQUEST_TIMEOUT) || 30000,
  maxJsonSize: process.env.MAX_JSON_SIZE || '10kb',
  maxUrlencodedSize: process.env.MAX_URLENCODED_SIZE || '10kb'
};
