// Secure headers middleware
// Menambahkan security headers secara otomatis

const helmet = require('helmet');
const helmetConfig = require('../config/helmetConfig');

// Apply security middleware
module.exports = (app) => {
  // Use Helmet untuk set security headers
  app.use(helmet(helmetConfig));
};
