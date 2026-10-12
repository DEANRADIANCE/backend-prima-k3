// Request logging middleware (development only)
// Mencatat semua request yang masuk untuk debugging

const morgan = require('morgan');
const config = require('../config/config');

// Format log
const logFormat = ':date[iso] :method :url :status :res[content-length] - :response-time ms';

const logConfig = {
  // Stream untuk write log
  stream: {
    write: (message) => {
      // Gunakan console.log untuk development
      // Untuk production, gunakan Winston atau Pino
      console.log(message);
    }
  }
};

module.exports = (app) => {
  // Development: detailed logs
  if (config.env === 'development') {
    app.use(morgan('dev'));
  } else {
    // Production: combined format
    app.use(morgan('combined', logConfig));
  }
};
