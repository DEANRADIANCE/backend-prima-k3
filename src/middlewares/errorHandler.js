// Error handling middleware
// Menangani semua error yang terjadi di aplikasi

const errorHandler = (err, req, res, next) => {
  // Log error ke console
  console.error(err.stack);

  // Tentukan status code (default 500)
  const statusCode = err.statusCode || 500;

  // Kirim response error
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
