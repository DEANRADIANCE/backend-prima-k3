// Input sanitization middleware
// Membersihkan input dari user untuk mencegah XSS dan serangan lain

const { body, param, query, validationResult } = require('express-validator');

// Sanitize common fields
const sanitizeInput = (req, res, next) => {
  // Trim dan normalize whitespace di semua string fields
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str.trim().replace(/\s+/g, ' ');
  };
  
  // Recursive sanitize object
  const sanitizeObject = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    if (Array.isArray(obj)) {
      return obj.map(item => sanitizeObject(item));
    }
    
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        sanitized[key] = key === 'password' ? value : sanitizeString(value);
      } else {
        sanitized[key] = sanitizeObject(value);
      }
    }
    return sanitized;
  };
  
  // Sanitize body
  if (req.body) {
    req.body = sanitizeObject(req.body);
  }
  
  // Sanitize params
  if (req.params) {
    req.params = sanitizeObject(req.params);
  }
  
  // Sanitize query
  if (req.query) {
    req.query = sanitizeObject(req.query);
  }
  
  next();
};

// Validate input (contoh validator)
const validateId = [
  param('id')
    .trim()
    .isNumeric()
    .withMessage('ID harus berupa angka')
    .toInt()
];

const validateUserInput = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nama harus 2-100 karakter')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Nama hanya boleh berisi huruf dan spasi'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email tidak valid')
    .normalizeEmail(),
  
  body('age')
    .optional()
    .isInt({ min: 1, max: 120 })
    .withMessage('Usia harus antara 1-120')
];

const validateProductInput = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 255 })
    .withMessage('Nama product harus 2-255 karakter'),
  
  body('price')
    .isNumeric()
    .withMessage('Harga harus berupa angka')
    .toFloat(),
  
  body('stock')
    .isInt({ min: 0 })
    .withMessage('Stok harus berupa angka positif')
    .toInt()
];

const validateMedicalRecordInput = [
  body('patientName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nama pasien harus 2-100 karakter'),

  body('examinationDate')
    .isISO8601()
    .withMessage('Tanggal periksa harus berupa tanggal yang valid (YYYY-MM-DD)'),

  body('vitalSigns')
    .isObject({ strict: true })
    .withMessage('Tanda vital harus berupa object'),

  body('diagnosis')
    .trim()
    .isLength({ min: 2, max: 255 })
    .withMessage('Diagnosa harus 2-255 karakter'),

  body('examiningDoctor')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Dokter pemeriksa harus 2-100 karakter'),

  body('status')
    .trim()
    .isIn(['menunggu', 'selesai', 'dibatalkan'])
    .withMessage('Status harus menunggu, selesai, atau dibatalkan')
];

// Error handler untuk validation
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validasi gagal',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  
  next();
};

module.exports = {
  sanitizeInput,
  validateId,
  validateUserInput,
  validateProductInput,
  validateMedicalRecordInput,
  handleValidationErrors
};
