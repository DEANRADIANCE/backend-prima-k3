// CORS configuration
// Mengatur Cross-Origin Resource Sharing untuk keamanan

const corsOptions = {
  origin: (origin, callback) => {
    // Daftar allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173', // Vite dev server
      'http://localhost:8080'
    ];
    
    // Allow requests dengan no origin (mobile apps, curl, postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Origin tidak diizinkan oleh CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  maxAge: 86400 // Cache preflight selama 24 jam
};

module.exports = corsOptions;
