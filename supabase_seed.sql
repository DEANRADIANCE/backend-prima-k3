-- Supabase Seed Data: Insert mock data from frontend (upsert if exists)

-- Insert Pasien (upsert)
INSERT INTO pasien (id, nama, unit_kerja, jabatan, jenis_kelamin, tanggal_lahir, golongan_darah, riwayat_alergi, status_karyawan, telepon) VALUES
(1, 'Ahmad Fauzi', 'Biro Umum & Pengadaan', 'Analis Pengadaan Barang', 'Laki-laki', '1988-04-15', 'O', 'Alergi Dingin & Debu', 'Tetap', '081234567890'),
(2, 'Budi Santoso', 'Direktorat Pengolahan Arsip', 'Arsiparis Ahli Pertama', 'Laki-laki', '1992-01-10', 'B', 'Tidak Ada', 'Tetap', '081298765432'),
(3, 'Citra Dewi', 'Pusat Data dan Informasi', 'Pranata Komputer', 'Perempuan', '1995-08-21', 'A', 'Antibiotik Golongan Penisilin', 'Tetap', '081377889900')
ON CONFLICT (id) DO NOTHING;

-- Insert Riwayat Medis
INSERT INTO riwayat_medis (id, pasien_id, nama_pasien, no_rm, tanggal_kunjungan, keluhan_utama, diagnosa, tekanan_darah, suhu_tubuh, terapi_obat, dokter_pemeriksa, status) VALUES
(1, 1, 'Ahmad Fauzi', 'RM-2026-001', '2026-10-09', 'Demam 2 hari, pusing, batuk berdahak', 'Infeksi Saluran Pernapasan Akut (ISPA)', '120/80 mmHg', 38.2, 'Paracetamol 500mg 3x1, CTM 3x1, Ambroxol 3x1', 'dr. Hendra Pratama, Sp.Ok', 'Selesai'),
(2, 2, 'Budi Santoso', 'RM-2026-002', '2026-10-10', 'Nyeri pinggang bawah setelah memindahkan boks arsip berat', 'Low Back Pain (LBP) Akut K3', '125/85 mmHg', 36.6, 'Ibuprofen 400mg 3x1, Vitamin B Kompleks 1x1', 'dr. Hendra Pratama, Sp.Ok', 'Istirahat Dokter')
ON CONFLICT (id) DO NOTHING;

-- Insert Surat Sakit
INSERT INTO surat_sakit (id, pasien_id, nama_pasien, departemen, tanggal_mulai, tanggal_selesai, jumlah_hari, diagnosa_singkat, dokter_penerbit, faskes_penerbit, status_verifikasi) VALUES
(1, 2, 'Budi Santoso', 'Direktorat Pengolahan Arsip', '2026-10-10', '2026-10-12', 3, 'Low Back Pain Akut K3', 'dr. Hendra Pratama, Sp.Ok', 'Klinik Pratama ANRI', 'Disetujui')
ON CONFLICT (id) DO NOTHING;

-- Insert Pemeriksaan K3
INSERT INTO pemeriksaan_k3 (id, pasien_id, nama_pasien, departemen, tanggal_pemeriksaan, jenis_pemeriksaan, status_kebugaran, catatan_dokter) VALUES
(1, 1, 'Ahmad Fauzi', 'Biro Umum & Pengadaan', '2026-09-15', 'MCU Berkala', 'Fit to Work', 'Kondisi fisik prima, disarankan menjaga asupan cairan harian.')
ON CONFLICT (id) DO NOTHING;

-- Insert Obat
INSERT INTO obat (id, nama, kategori, komposisi, jenis_obat, dosis_umum, indikasi, efek_samping, peringatan, penyimpanan, status, foto) VALUES
(1, 'Paracetamol 500mg', 'Demam', 'Paracetamol 500 mg per tablet', 'Tablet', 'Dewasa: 1 tablet, 3-4 kali sehari sesudah makan', 'Meredakan demam, sakit kepala, sakit gigi, dan nyeri ringan hingga sedang', 'Reaksi alergi ringan, jarang terjadi gangguan fungsi hati pada dosis wajar', 'Hati-hati penggunaan pada penderita gangguan fungsi hati dan ginjal kronis', 'Simpan pada suhu ruangan di bawah 30°C, terlindung dari cahaya matahari langsung', 'Tersedia', 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600'),
(2, 'Amoxicillin 500mg', 'Antibiotik', 'Amoxicillin Trihydrate 500 mg', 'Kapsul', 'Dewasa: 1 kapsul setiap 8 jam dengan anjuran dokter', 'Infeksi saluran pernapasan, telinga, hidung, tenggorokan, dan kulit', 'Mual, muntah, diare ringan, ruam kulit pada individu sensitif', 'Wajib dihabiskan sesuai resep dokter untuk mencegah resistensi antibiotik', 'Simpan di tempat kering dan sejuk (15-25°C), jauhkan dari jangkauan anak-anak', 'Tersedia', 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600'),
(3, 'Ibuprofen 400mg', 'Nyeri', 'Ibuprofen 400 mg', 'Tablet', 'Dewasa: 1 tablet 3 kali sehari setelah makan', 'Meredakan nyeri otot, sakit gigi, dismenore, dan peradangan sendi', 'Nyeri ulu hati, mual, dispepsia, pusing ringan', 'Hindari bagi penderita tukak lambung aktif dan riwayat pendarahan cerna', 'Simpan pada wadah tertutup rapat pada suhu kamar (20-25°C)', 'Tersedia', 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600')
ON CONFLICT (id) DO NOTHING;

-- Insert Alat Medis
INSERT INTO alat_medis (id, nama, kategori, penjelasan, fungsi_utama, cara_penggunaan, peringatan, penyimpanan, status, foto) VALUES
(1, 'Elektrokardiograf (EKG 12-Lead)', 'Diagnostik', 'Perangkat medis diagnostik berstandar rumah sakit untuk merekam aktivitas kelistrikan otot jantung pasien secara non-invasif.', 'Mendeteksi aritmia, iskemia, infark miokard akut, dan kelainan ritme konduksi jantung pegawai.', 'Pasang elektroda pada keempat ekstremitas dan keenam titik prekordial dada dengan gel konduktif, lalu rekam ritme 12-lead.', 'PERINGATAN: Pastikan pasien melepaskan benda berbahan logam dan ponsel agar tidak menimbulkan artefak elektromagnetik.', 'Simpan di Ruang Tindakan pada suhu 20-25°C dengan kabel probe tertata rapi tanpa lekukan patah.', 'Tersedia', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600'),
(2, 'Tensimeter Digital Otomatis Omron', 'Diagnostik', 'Alat pengukur tekanan darah osilometrik digital dengan manset cerdas berakurasi tinggi untuk skrining hipertensi.', 'Pemeriksaan tanda vital tekanan darah sistolik, diastolik, serta denyut nadi pasien.', 'Pasang manset setinggi jantung pada lengan kiri atas pasien yang rileks, tekan tombol START dan tunggu hingga angka stabil.', 'PERINGATAN: Pasien dilarang berbicara atau bergerak selama proses inflasi manset.', 'Simpan di meja perawat dalam kantong pelindung, ganti baterai atau kalibrasi berkala setiap 6 bulan.', 'Tersedia', 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600')
ON CONFLICT (id) DO NOTHING;

-- Insert Nakes
INSERT INTO nakes (id, nama, profesi, jabatan, sip, str, pendidikan, layanan, foto) VALUES
(1, 'dr. Hendra Pratama, Sp.Ok', 'Dokter Spesialis Okupasi', 'Dokter Penanggung Jawab Klinik & K3', 'SIP. 445/002/K3-OKUPASI/2023', 'STR. 31.1.1.100.1.20.088491', 'Spesialis Kedokteran Kerja - Universitas Indonesia', 'Poli Umum', 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600'),
(2, 'dr. Siti Rahmawati', 'Dokter Umum', 'Dokter Pemeriksa Faskes Primer', 'SIP. 445/019/DU-DKI/2022', 'STR. 31.2.1.100.2.19.043211', 'Profesi Dokter - FK Universitas Padjadjaran', 'Poli Umum', 'https://images.unsplash.com/photo-1594824813571-638f0263441f?w=600')
ON CONFLICT (id) DO NOTHING;

-- Insert Perizinan
INSERT INTO perizinan (id, jenis, judul, nomor_izin, masa_berlaku, status, jenis_fasilitas, lokasi, penanggung_jawab, dokumen_url) VALUES
('sio-klinik', 'SIO Klinik', 'Perizinan Operasional Klinik Pratama ANRI', '445/002/KLINIK-PRATAMA/DPMPTSP/2024', '18 Januari 2024 s/d 18 Januari 2029', 'Aktif', 'Klinik Pratama Rawat Jalan Pemerintah', 'Gedung C Lantai Dasar, Arsip Nasional Republik Indonesia, Jl. Ampera Raya No. 7 Jakarta Selatan', 'dr. Hendra Pratama, Sp.Ok', 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1000'),
('sio-farmasi', 'SIO Farmasi', 'Perizinan Operasional Instalasi Farmasi Klinik', '442/019/FARMASI-KLINIK/DINKES/2024', '05 Februari 2024 s/d 05 Februari 2029', 'Aktif', 'Ruang Farmasi & Pelayanan Obat Terpadu', 'Klinik Pratama ANRI, Jl. Ampera Raya No. 7 Jakarta Selatan', 'apt. Budi Santoso, S.Farm (SIPA. 446/088/APT-JAKSEL/2021)', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000')
ON CONFLICT (id) DO NOTHING;

-- Insert Artikel
INSERT INTO artikel (id, judul, kategori, ringkasan, isi, penulis, tanggal, foto, dibaca) VALUES
(1, 'Pentingnya Postur Ergonomis Saat Bekerja di Depan Komputer', 'Ergonomi', 'Duduk terlalu lama dengan posisi membungkuk meningkatkan risiko nyeri punggung bawah (LBP) dan ketegangan leher pada pegawai arsip.', 'Bekerja di lingkungan kantor modern seringkali mengharuskan kita duduk berjam-jam di depan layar monitor komputer...', 'dr. Hendra Pratama, Sp.Ok', '2026-10-10', 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800', 342),
(2, 'Manajemen Stres & Burnout di Tempat Kerja untuk Produktivitas Optimal', 'Kesehatan Mental', 'Kenali gejala kelelahan emosional dan fisik di tempat kerja serta langkah praktis untuk mengatasinya secara efektif.', 'Tekanan tenggat waktu dan beban tugas yang menumpuk kerap memicu stres kerja...', 'Anisa Larasati, M.Psi., Psikolog', '2026-10-04', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800', 489)
ON CONFLICT (id) DO NOTHING;

-- Insert Flyer
INSERT INTO flyer (id, judul, keterangan, kategori, tanggal, gambar) VALUES
(1, 'Poster Gerakan Pekerja Sehat ANRI (GPS-ANRI)', 'Panduan senam peregangan 5 menit di tempat kerja untuk mencegah kekakuan sendi dan kelelahan mata.', 'Kebugaran Fisik', '2026-10-01', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'),
(2, 'Flyer Etika Batuk & Pencegahan ISPA di Perkantoran', 'Terapkan langkah 4T: Tutup hidung dengan lengan dalam, Tanggalkan masker kotor, Tisu dibuang tempat tertutup, dan Tangan dicuci bersih.', 'Pencegahan Infeksi', '2026-09-25', 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800')
ON CONFLICT (id) DO NOTHING;

-- Insert Ruangan
INSERT INTO ruangan (id, nama, nomor, fungsi, kapasitas) VALUES
(1, 'Ruangan 1: Ruang Tunggu & Registrasi Pasien', 'R.101', 'Area penerimaan pasien, validasi kartu identitas dan BPJS, serta pencatatan antrean berobat secara tertib.', '30 Orang'),
(2, 'Ruangan 2: Ruang Konsultasi Dokter Umum', 'R.102', 'Tempat anamnesis, pemeriksaan fisik menyeluruh, penegakan diagnosis, dan penerbitan resep medis oleh dokter.', '4 Orang')
ON CONFLICT (id) DO NOTHING;

-- Reset sequences to continue from correct value
SELECT setval('pasien_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pasien) + 1);
SELECT setval('riwayat_medis_id_seq', (SELECT COALESCE(MAX(id), 0) FROM riwayat_medis) + 1);
SELECT setval('surat_sakit_id_seq', (SELECT COALESCE(MAX(id), 0) FROM surat_sakit) + 1);
SELECT setval('pemeriksaan_k3_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pemeriksaan_k3) + 1);
SELECT setval('obat_id_seq', (SELECT COALESCE(MAX(id), 0) FROM obat) + 1);
SELECT setval('alat_medis_id_seq', (SELECT COALESCE(MAX(id), 0) FROM alat_medis) + 1);
SELECT setval('nakes_id_seq', (SELECT COALESCE(MAX(id), 0) FROM nakes) + 1);
SELECT setval('artikel_id_seq', (SELECT COALESCE(MAX(id), 0) FROM artikel) + 1);
SELECT setval('flyer_id_seq', (SELECT COALESCE(MAX(id), 0) FROM flyer) + 1);
SELECT setval('ruangan_id_seq', (SELECT COALESCE(MAX(id), 0) FROM ruangan) + 1);
