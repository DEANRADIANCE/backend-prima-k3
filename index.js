const app = require('./src/app');

// Export untuk Vercel serverless functions
module.exports = app;

// Local development support
if (require.main === module) {
  const config = require('./src/config/config');
  app.listen(config.port, () => {
    console.log(`Server berjalan pada port ${config.port}`);
    console.log(`Environment: ${config.env}`);
  });
}
