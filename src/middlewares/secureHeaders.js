// Secure headers middleware
// Menambahkan security headers secara otomatis

const helmet = require('helmet');
const helmetConfig = require('../config/helmetConfig');
const corsOptions = require('../config/corsConfig');
const cors = require('cors');

// Apply security middleware
module.exports = (app) => {
  // Use Helmet untuk set security headers
  app.use(helmet(helmetConfig));
  
  // Use CORS dengan konfigurasi yang aman
  app.use(cors(corsOptions));
};
