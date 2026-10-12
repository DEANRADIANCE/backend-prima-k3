# Express.js API - Simple & Clean

API sederhana menggunakan Express.js dengan struktur folder yang rapi, terorganisir, dan aman.

## Struktur Folder

```
├── src/
│   ├── config/           # Konfigurasi aplikasi
│   │   ├── config.js                 # Environment variables & settings
│   │   ├── corsConfig.js             # CORS configuration
│   │   ├── helmetConfig.js           # Security headers
│   │   └── rateLimiter.js            # Rate limiting
│   ├── controllers/      # Request handlers
│   │   ├── userController.js
│   │   ├── productController.js
│   │   └── medicalRecordController.js
│   ├── services/         # Business logic
│   │   ├── userService.js
│   │   ├── productService.js
│   │   └── medicalRecordService.js
│   ├── routes/           # API routes
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   └── medicalRecordRoutes.js
│   ├── middlewares/      # Custom middlewares
│   │   ├── errorHandler.js           # Global error handling
│   │   ├── sanitizer.js              # Input validation & sanitization
│   │   ├── secureHeaders.js          # Security headers
│   │   ├── logger.js                 # Request logging
│   │   └── timeout.js                # Request timeout
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
├── .gitignore
├── package.json
└── README.md
```

## Penjelasan Arsitektur

- **server.js**: Entry point aplikasi, menjalankan HTTP server
- **app.js**: Konfigurasi Express (middleware, routes, security)
- **routes/**: Mendefinisikan endpoint API dengan validasi
- **controllers/**: Menerima request, kirim response ke service
- **services/**: Business logic dan operasi data
- **middlewares/**: Custom middleware (error handling, sanitization, security, logging, timeout)
- **config/**: Konfigurasi environment, CORS, Helmet, rate limiter

## Instalasi

```bash
npm install
```

## Menjalankan Aplikasi

### Development mode (auto-reload)
```bash
npm run dev
```

### Production mode
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Cek status API

### Users
- **GET** `/api/users` - Ambil semua users
- **GET** `/api/users/:id` - Ambil user by ID
- **POST** `/api/users` - Buat user baru
- **PUT** `/api/users/:id` - Update user
- **DELETE** `/api/users/:id` - Hapus user

### Products
- **GET** `/api/products` - Ambil semua products
- **GET** `/api/products/:id` - Ambil product by ID
- **POST** `/api/products` - Buat product baru
- **PUT** `/api/products/:id` - Update product
- **DELETE** `/api/products/:id` - Hapus product

### Medical Records
- **GET** `/api/medical-records` - Ambil semua riwayat medis
- **GET** `/api/medical-records/:id` - Ambil riwayat medis berdasarkan ID
- **POST** `/api/medical-records` - Buat riwayat medis baru
- **PUT** `/api/medical-records/:id` - Update riwayat medis
- **DELETE** `/api/medical-records/:id` - Hapus riwayat medis

## Contoh Request

### Buat User Baru
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmad","email":"ahmad@example.com","age":28}'
```

### Buat Product Baru
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","price":500000,"stock":20}'
```

### Ambil Semua Users
```bash
curl http://localhost:3000/api/users
```

### Buat Riwayat Medis Baru
```bash
curl -X POST http://localhost:3000/api/medical-records \
  -H "Content-Type: application/json" \
  -d '{"patientName":"Andi Wijaya","examinationDate":"2026-10-12","vitalSigns":{"bloodPressure":"120/80 mmHg","heartRate":"80 bpm","temperature":"36.8 C","respiratoryRate":"18 x/menit"},"diagnosis":"Demam","examiningDoctor":"dr. Budi Santoso","status":"selesai"}'
```

## Format Response

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message"
}
```

## Fitur Keamanan

### 1. Security Headers (Helmet)
- Content Security Policy (CSP)
- X-Frame-Options (Clickjacking protection)
- X-Content-Type-Options (MIME sniffing protection)
- HSTS (HTTP Strict Transport Security)
- DNS Prefetch Control
- X-XSS-Protection

### 2. CORS Protection
- Whitelist allowed origins
- Prevent cross-origin attacks
- Support untuk credentials

### 3. Input Validation & Sanitization
- Trim whitespace otomatis
- Validasi tipe data
- Sanitasi input strings
- Prevent XSS attacks

### 4. Rate Limiting
- 100 requests per 15 minutes per IP
- Prevent brute force attacks
- DoS protection

### 5. Request Timeout
- Default 30 detik per request
- Prevent resource exhaustion

### 6. Request Logging
- Development: Detailed logs
- Production: Combined format
- Track semua HTTP requests

### 7. Payload Size Limits
- Max JSON body: 10KB
- Max URL-encoded body: 10KB
- Prevent large payload attacks

## Environment Variables

```env
NODE_ENV=development    # development atau production
PORT=3000               # Port server
```

## Pengembangan Selanjutnya

- [ ] Integrasi dengan database (MongoDB, PostgreSQL, MySQL)
- [ ] Implementasi authentication (JWT, OAuth)
- [ ] Implementasi authorization (roles, permissions)
- [ ] Implementasi refresh tokens
- [ ] Unit testing (jest, mocha)
- [ ] API documentation (swagger, postman)
- [ ] Request encryption
- [ ] IP whitelist/blacklist
- [ ] API key management
- [ ] Audit logging

## License

ISC
