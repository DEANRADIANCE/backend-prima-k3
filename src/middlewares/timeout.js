// Request timeout middleware
// Memutus request yang memakan waktu terlalu lama

const config = require('../config/config');

const timeoutHandler = (req, res, next) => {
  // Set timeout untuk response (30 detik default)
  const timeout = config.requestTimeout || 30000;
  
  const timeoutId = setTimeout(() => {
    if (!res.headersSent) {
      res.status(408).json({
        success: false,
        message: 'Request timeout. Server tidak merespons dalam waktu yang ditentukan.'
      });
    }
  }, timeout);
  
  // Clear timeout jika response sudah dikirim
  res.on('finish', () => {
    clearTimeout(timeoutId);
  });
  
  res.on('close', () => {
    clearTimeout(timeoutId);
  });
  
  next();
};

module.exports = timeoutHandler;
