// Rate limiter configuration
// Membatasi jumlah request dari satu IP dalam periode tertentu

const rateLimit = require('express-rate-limit');

// Konfigurasi rate limiting
const rateLimitConfig = {
  // Window time dalam ms (15 menit)
  windowMs: 15 * 60 * 1000,
  
  // Maximum requests per window
  max: 100,
  
  // Message response
  message: {
    success: false,
    message: 'Terlalu banyak request dari IP ini, silakan coba lagi nanti'
  },
  
  // Status code
  statusCode: 429,
  
  // Standard rate limit headers
  standardHeaders: true,
  
  // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  
  // Key generator (gunakan IP address)
  keyGenerator: (req) => {
    return req.ip || req.connection.remoteAddress;
  },
  
  // Store (default: MemoryStore)
  // Untuk production, gunakan Redis untuk horizontal scaling
  // store: new RedisStore({ client: redisClient })
};

const limiter = rateLimit(rateLimitConfig);

module.exports = limiter;
