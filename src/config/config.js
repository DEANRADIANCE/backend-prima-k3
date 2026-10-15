const defaultCorsOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:8080'
];

const corsOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : defaultCorsOrigins;

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  apiVersion: 'v1',
  requestTimeout: Number.parseInt(process.env.REQUEST_TIMEOUT, 10) || 30000,
  maxJsonSize: process.env.MAX_JSON_SIZE || '10kb',
  maxUrlencodedSize: process.env.MAX_URLENCODED_SIZE || '10kb',
  corsOrigins
};
