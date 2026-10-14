// Konfigurasi utama aplikasi Express
// File ini mengatur middleware dan routing

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const secureHeaders = require('./middlewares/secureHeaders');
const logger = require('./middlewares/logger');
const timeoutHandler = require('./middlewares/timeout');
const limiter = require('./config/rateLimiter');
const { sanitizeInput } = require('./middlewares/sanitizer');
const corsOptions = require('./config/corsConfig');

const app = express();

// Setup logging
logger(app);

// CORS
app.use(cors(corsOptions));

// Security headers
secureHeaders(app);

// Rate limiting
app.use(limiter);

// Request timeout
app.use(timeoutHandler);

// Middleware untuk parsing JSON (dengan size limit)
app.use(express.json({ limit: '10kb' }));

// Middleware untuk parsing URL-encoded data (dengan size limit)
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Sanitize input
app.use(sanitizeInput);

// Gunakan semua routes
app.use('/api', routes);

// Error handling middleware (harus di akhir)
app.use(errorHandler);

module.exports = app;
