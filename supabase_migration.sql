-- Supabase Migration: Create all tables for Prima K3 System

-- 1. Table: pasien
CREATE TABLE IF NOT EXISTS pasien (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255),
  nama_lengkap VARCHAR(255),
  unit_kerja VARCHAR(255),
  departemen VARCHAR(255),
  jabatan VARCHAR(255),
  posisi VARCHAR(255),
  jenis_kelamin VARCHAR(20),
  tanggal_lahir DATE,
  golongan_darah VARCHAR(5),
  riwayat_alergi TEXT,
  status_karyawan VARCHAR(50),
  status_kerja VARCHAR(50),
  telepon VARCHAR(20),
  nomor_telepon VARCHAR(20),
  nip VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: riwayat_medis
CREATE TABLE IF NOT EXISTS riwayat_medis (
  id BIGSERIAL PRIMARY KEY,
  pasien_id BIGINT REFERENCES pasien(id) ON DELETE CASCADE,
  nama_pasien VARCHAR(255),
  no_rm VARCHAR(50) UNIQUE,
  nip VARCHAR(50),
  departemen VARCHAR(255),
  tanggal_periksa DATE,
  dokter VARCHAR(255),
  keluhan TEXT,
  tindakan TEXT,
  resep_obat TEXT,
  tanggal_kunjungan DATE,
  keluhan_utama TEXT,
  diagnosa TEXT,
  tekanan_darah VARCHAR(20),
  suhu_tubuh NUMERIC(4,1),
  terapi_obat TEXT,
  dokter_pemeriksa VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: surat_sakit
CREATE TABLE IF NOT EXISTS surat_sakit (
  id BIGSERIAL PRIMARY KEY,
  nomor_surat VARCHAR(100),
  pasien_id BIGINT REFERENCES pasien(id) ON DELETE CASCADE,
  nama_pasien VARCHAR(255),
  nip VARCHAR(50),
  departemen VARCHAR(255),
  faskes_penerbit VARCHAR(255),
  nama_dokter VARCHAR(255),
  tanggal_mulai DATE,
  tanggal_selesai DATE,
  jumlah_hari INTEGER,
  diagnosa TEXT,
  diagnosa_singkat VARCHAR(255),
  dokter_penerbit VARCHAR(255),
  dokumen_url TEXT,
  file_url TEXT,
  catatan TEXT,
  uploaded_at TIMESTAMP,
  status_verifikasi VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Table: pemeriksaan_k3
CREATE TABLE IF NOT EXISTS pemeriksaan_k3 (
  id BIGSERIAL PRIMARY KEY,
  pasien_id BIGINT REFERENCES pasien(id) ON DELETE CASCADE,
  nama_pasien VARCHAR(255),
  departemen VARCHAR(255),
  tanggal_pemeriksaan DATE,
  jenis_pemeriksaan VARCHAR(255),
  status_kebugaran VARCHAR(50),
  catatan_dokter TEXT,
  kode_mcu VARCHAR(50),
  hasil_kebugaran VARCHAR(255),
  catatan_rekomendasi TEXT,
  dokter_penguji VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Table: obat
CREATE TABLE IF NOT EXISTS obat (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  kategori VARCHAR(100),
  komposisi TEXT,
  jenis_obat VARCHAR(50),
  dosis_umum TEXT,
  indikasi TEXT,
  efek_samping TEXT,
  peringatan TEXT,
  penyimpanan TEXT,
  status VARCHAR(50),
  foto TEXT,
  thumbnail TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Table: alat_medis
CREATE TABLE IF NOT EXISTS alat_medis (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  kategori VARCHAR(100),
  penjelasan TEXT,
  fungsi_utama TEXT,
  cara_penggunaan TEXT,
  peringatan TEXT,
  penyimpanan TEXT,
  status VARCHAR(50),
  foto TEXT,
  thumbnail TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Table: nakes (Tenaga Kesehatan)
CREATE TABLE IF NOT EXISTS nakes (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  profesi VARCHAR(100),
  jabatan VARCHAR(255),
  sip VARCHAR(100),
  str VARCHAR(100),
  pendidikan TEXT,
  layanan VARCHAR(255),
  foto TEXT,
  jadwal JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Table: perizinan
CREATE TABLE IF NOT EXISTS perizinan (
  id VARCHAR(100) PRIMARY KEY,
  jenis VARCHAR(100),
  judul VARCHAR(255),
  nomor_izin VARCHAR(100),
  masa_berlaku VARCHAR(50),
  status VARCHAR(50),
  jenis_fasilitas VARCHAR(255),
  lokasi TEXT,
  penanggung_jawab VARCHAR(255),
  dokumen_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Table: artikel
CREATE TABLE IF NOT EXISTS artikel (
  id BIGSERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  kategori VARCHAR(100),
  ringkasan TEXT,
  isi TEXT,
  penulis VARCHAR(255),
  tanggal DATE,
  foto TEXT,
  dibaca INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10. Table: flyer
CREATE TABLE IF NOT EXISTS flyer (
  id BIGSERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  keterangan TEXT,
  kategori VARCHAR(100),
  tanggal DATE,
  gambar TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 11. Table: ruangan
CREATE TABLE IF NOT EXISTS ruangan (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  nomor VARCHAR(50),
  fungsi TEXT,
  fasilitas TEXT[],
  kapasitas VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 12. Table: booking (Reservasi layanan)
CREATE TABLE IF NOT EXISTS booking (
  id BIGSERIAL PRIMARY KEY,
  pasien_id BIGINT REFERENCES pasien(id) ON DELETE CASCADE,
  jenis_layanan VARCHAR(100),
  tanggal_booking DATE,
  jam_booking TIME,
  status VARCHAR(50),
  catatan TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance (skip if already exist)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_riwayat_medis_pasien') THEN
    CREATE INDEX idx_riwayat_medis_pasien ON riwayat_medis(pasien_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_riwayat_medis_no_rm') THEN
    CREATE INDEX idx_riwayat_medis_no_rm ON riwayat_medis(no_rm);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_surat_sakit_pasien') THEN
    CREATE INDEX idx_surat_sakit_pasien ON surat_sakit(pasien_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_pemeriksaan_k3_pasien') THEN
    CREATE INDEX idx_pemeriksaan_k3_pasien ON pemeriksaan_k3(pasien_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_booking_pasien') THEN
    CREATE INDEX idx_booking_pasien ON booking(pasien_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'idx_booking_tanggal') THEN
    CREATE INDEX idx_booking_tanggal ON booking(tanggal_booking);
  END IF;
END $$;
