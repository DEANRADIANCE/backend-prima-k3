# Express.js API - Klinik Kesehatan

API RESTful untuk sistem manajemen klinik kesehatan menggunakan Express.js dengan Supabase sebagai database backend.

## Struktur Folder

```
├── src/
│   ├── config/           # Konfigurasi aplikasi
│   │   ├── config.js                 # Environment variables & settings
│   │   ├── supabase.js               # Supabase client configuration
│   │   ├── corsConfig.js             # CORS configuration
│   │   ├── helmetConfig.js           # Security headers
│   │   └── rateLimiter.js            # Rate limiting
│   ├── controllers/      # Request handlers
│   │   ├── authController.js         # Authentication (login, profile, logout)
│   │   ├── userController.js         # Users & Admin management
│   │   ├── pasienController.js       # Patient management
│   │   ├── riwayatMedisController.js # Medical records
│   │   ├── suratSakitController.js   # Sick leave certificates
│   │   ├── pemeriksaanK3Controller.js # MCU & Fit to Work
│   │   ├── obatController.js         # Pharmaceuticals
│   │   ├── alatMedisController.js    # Medical equipment
│   │   ├── nakesController.js        # Medical personnel
│   │   ├── perizinanController.js    # Licenses (SIO)
│   │   ├── ruanganController.js      # Facility rooms
│   │   ├── artikelController.js      # Health articles
│   │   ├── flyerController.js        # K3 posters/flyers
│   │   └── bookingController.js      # Counseling & support bookings
│   ├── models/           # Database models
│   │   ├── authModel.js
│   │   ├── userModel.js
│   │   ├── pasienModel.js
│   │   ├── riwayatMedisModel.js
│   │   ├── suratSakitModel.js
│   │   ├── pemeriksaanK3Model.js
│   │   ├── obatModel.js
│   │   ├── alatMedisModel.js
│   │   ├── nakesModel.js
│   │   ├── perizinanModel.js
│   │   ├── ruanganModel.js
│   │   ├── artikelModel.js
│   │   ├── flyerModel.js
│   │   └── bookingModel.js
│   ├── routes/           # API routes
│   │   ├── index.js
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── pasienRoutes.js
│   │   ├── riwayatMedisRoutes.js
│   │   ├── suratSakitRoutes.js
│   │   ├── pemeriksaanK3Routes.js
│   │   ├── obatRoutes.js
│   │   ├── alatMedisRoutes.js
│   │   ├── nakesRoutes.js
│   │   ├── perizinanRoutes.js
│   │   ├── ruanganRoutes.js
│   │   ├── artikelRoutes.js
│   │   ├── flyerRoutes.js
│   │   └── bookingRoutes.js
│   ├── middlewares/      # Custom middlewares
│   │   ├── errorHandler.js           # Global error handling
│   │   ├── sanitizer.js              # Input validation & sanitization
│   │   ├── secureHeaders.js          # Security headers
│   │   ├── logger.js                 # Request logging
│   │   └── timeout.js                # Request timeout
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
├── .env.example          # Environment variables template
├── .gitignore
├── package.json
├── supabase-migration.sql  # Database schema & dummy data
└── README.md
```

## Penjelasan Arsitektur

- **server.js**: Entry point aplikasi, menjalankan HTTP server
- **app.js**: Konfigurasi Express (middleware, routes, security)
- **routes/****: Mendefinisikan endpoint API dengan validasi
- **controllers/****: Menerima request, kirim response ke model
- **models/****: Business logic dan operasi data via Supabase
- **middlewares/****: Custom middleware (error handling, sanitization, security, logging, timeout)
- **config/****: Konfigurasi environment, Supabase, CORS, Helmet, rate limiter

## Instalasi

```bash
npm install
```

## Setup Supabase

Gunakan project Supabase Prima K3 yang sudah ada; tidak perlu membuat project baru. Salin `.env.example` menjadi `.env`, lalu isi `SUPABASE_URL` dan `SUPABASE_SERVICE_ROLE_KEY` dengan kredensial backend project yang sama:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
PORT=5000
NODE_ENV=development
REQUEST_TIMEOUT=30000
MAX_JSON_SIZE=10kb
MAX_URLENCODED_SIZE=10kb
CORS_ORIGINS=http://localhost:3000,http://localhost:5173,http://localhost:8080
```

Jangan commit `.env`, membagikan service-role key, atau menggunakan key tersebut di frontend. Terapkan `supabase_migration.sql` hanya jika skema yang diperlukan belum tersedia di project yang ada.

## Menjalankan Aplikasi

### Development mode (auto-reload)
```bash
npm run dev
```

### Production mode
```bash
npm start
```

Server akan berjalan di `http://localhost:5000` secara default. Port dan CORS origins dapat disesuaikan melalui environment variables.

## API Endpoints

### Health Check
- **GET** `/api/health` - Cek status API

### Auth
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/profile` - Ambil profile user (perlu auth)
- **POST** `/api/auth/logout` - Logout user

### Users
- **GET** `/api/users` - Ambil semua users
- **GET** `/api/users/:id` - Ambil user by ID
- **POST** `/api/users` - Buat user baru
- **PUT** `/api/users/:id` - Update user
- **DELETE** `/api/users/:id` - Hapus user

### Pasien
- **GET** `/api/pasien` - Ambil semua pasien
- **GET** `/api/pasien/:id` - Ambil pasien by ID
- **POST** `/api/pasien` - Buat pasien baru
- **PUT** `/api/pasien/:id` - Update pasien
- **DELETE** `/api/pasien/:id` - Hapus pasien

### Riwayat Medis
- **GET** `/api/riwayat-medis` - Ambil semua riwayat medis
- **GET** `/api/riwayat-medis/:id` - Ambil riwayat medis by ID
- **POST** `/api/riwayat-medis` - Buat riwayat medis baru
- **PUT** `/api/riwayat-medis/:id` - Update riwayat medis
- **DELETE** `/api/riwayat-medis/:id` - Hapus riwayat medis

### Surat Sakit
- **GET** `/api/surat-sakit` - Ambil semua surat sakit
- **GET** `/api/surat-sakit/:id` - Ambil surat sakit by ID
- **POST** `/api/surat-sakit` - Buat surat sakit baru
- **PUT** `/api/surat-sakit/:id` - Update surat sakit
- **DELETE** `/api/surat-sakit/:id` - Hapus surat sakit

### Pemeriksaan K3 (MCU)
- **GET** `/api/pemeriksaan-k3` - Ambil semua pemeriksaan K3
- **GET** `/api/pemeriksaan-k3/:id` - Ambil pemeriksaan K3 by ID
- **POST** `/api/pemeriksaan-k3` - Buat pemeriksaan K3 baru
- **PUT** `/api/pemeriksaan-k3/:id` - Update pemeriksaan K3
- **DELETE** `/api/pemeriksaan-k3/:id` - Hapus pemeriksaan K3

### Obat
- **GET** `/api/obat` - Ambil semua obat
- **GET** `/api/obat/:id` - Ambil obat by ID
- **POST** `/api/obat` - Buat obat baru
- **PUT** `/api/obat/:id` - Update obat
- **DELETE** `/api/obat/:id` - Hapus obat

### Alat Medis
- **GET** `/api/alat-medis` - Ambil semua alat medis
- **GET** `/api/alat-medis/:id` - Ambil alat medis by ID
- **POST** `/api/alat-medis` - Buat alat medis baru
- **PUT** `/api/alat-medis/:id` - Update alat medis
- **DELETE** `/api/alat-medis/:id` - Hapus alat medis

### Nakes
- **GET** `/api/nakes` - Ambil semua nakes
- **GET** `/api/nakes/:id` - Ambil nakes by ID
- **POST** `/api/nakes` - Buat nakes baru
- **PUT** `/api/nakes/:id` - Update nakes
- **DELETE** `/api/nakes/:id` - Hapus nakes

### Perizinan
- **GET** `/api/perizinan` - Ambil semua perizinan
- **GET** `/api/perizinan/:id` - Ambil perizinan by ID
- **POST** `/api/perizinan` - Buat perizinan baru
- **PUT** `/api/perizinan/:id` - Update perizinan
- **DELETE** `/api/perizinan/:id` - Hapus perizinan

### Ruangan
- **GET** `/api/ruangan` - Ambil semua ruangan
- **GET** `/api/ruangan/:id` - Ambil ruangan by ID
- **POST** `/api/ruangan` - Buat ruangan baru
- **PUT** `/api/ruangan/:id` - Update ruangan
- **DELETE** `/api/ruangan/:id` - Hapus ruangan

### Artikel
- **GET** `/api/artikel` - Ambil semua artikel
- **GET** `/api/artikel/:id` - Ambil artikel by ID
- **POST** `/api/artikel` - Buat artikel baru
- **PUT** `/api/artikel/:id` - Update artikel
- **DELETE** `/api/artikel/:id` - Hapus artikel

### Flyer
- **GET** `/api/flyer` - Ambil semua flyer
- **GET** `/api/flyer/:id` - Ambil flyer by ID
- **POST** `/api/flyer` - Buat flyer baru
- **PUT** `/api/flyer/:id` - Update flyer
- **DELETE** `/api/flyer/:id` - Hapus flyer

### Booking Konseling
- **GET** `/api/booking/konseling` - Ambil semua booking konseling
- **POST** `/api/booking/konseling` - Buat booking konseling baru

### Booking Penunjang
- **GET** `/api/booking/penunjang` - Ambil semua booking penunjang
- **POST** `/api/booking/penunjang` - Buat booking penunjang baru

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
- Support credentials

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
NODE_ENV=development      # development atau production
PORT=5000                 # Port server
SUPABASE_URL=             # Supabase project URL
SUPABASE_SERVICE_ROLE_KEY= # Server-only Supabase service-role key
REQUEST_TIMEOUT=30000     # Request timeout dalam ms
MAX_JSON_SIZE=10kb        # Max JSON body size
MAX_URLENCODED_SIZE=10kb  # Max URL-encoded body size
CORS_ORIGINS=             # Allowed origins, dipisah koma
```

## Database Schema

Lihat file `supabase-migration.sql` untuk schema lengkap mencakup:
- users (autentikasi & admin)
- pasien (data pasien/karyawan)
- riwayat_medis (catatan konsultasi)
- surat_sakit (surat cuti sakit)
- pemeriksaan_k3 (MCU & fit to work)
- obat (farmasi)
- alat_medis (peralatan medis)
- nakes (tenaga kesehatan)
- perizinan (SIO & izin lainnya)
- ruangan (fasilitas)
- artikel (edukasi kesehatan)
- flyer (poster k3)
- booking (konseling & penunjang)

## Development

- Clone repository
- Install dependencies: `npm install`
- Setup `.env` dengan kredensial Supabase
- Import SQL schema ke Supabase
- Run: `npm run dev`

## License

ISC