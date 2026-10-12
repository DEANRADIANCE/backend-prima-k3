// Entry point aplikasi Express.js
// File ini menjalankan server HTTP

const app = require('./app');
const config = require('./config/config');

// Jalankan server pada port yang ditentukan
app.listen(config.port, () => {
  console.log(`Server berjalan pada port ${config.port}`);
  console.log(`Environment: ${config.env}`);
});
