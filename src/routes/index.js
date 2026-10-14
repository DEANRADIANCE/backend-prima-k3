const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const pasienRoutes = require('./pasienRoutes');
const riwayatMedisRoutes = require('./riwayatMedisRoutes');
const suratSakitRoutes = require('./suratSakitRoutes');
const pemeriksaanK3Routes = require('./pemeriksaanK3Routes');
const obatRoutes = require('./obatRoutes');
const alatMedisRoutes = require('./alatMedisRoutes');
const nakesRoutes = require('./nakesRoutes');
const perizinanRoutes = require('./perizinanRoutes');
const ruanganRoutes = require('./ruanganRoutes');
const artikelRoutes = require('./artikelRoutes');
const flyerRoutes = require('./flyerRoutes');
const bookingRoutes = require('./bookingRoutes');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API berjalan dengan baik',
    timestamp: new Date().toISOString()
  });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/pasien', pasienRoutes);
router.use('/riwayat-medis', riwayatMedisRoutes);
router.use('/surat-sakit', suratSakitRoutes);
router.use('/pemeriksaan-k3', pemeriksaanK3Routes);
router.use('/obat', obatRoutes);
router.use('/alat-medis', alatMedisRoutes);
router.use('/nakes', nakesRoutes);
router.use('/perizinan', perizinanRoutes);
router.use('/ruangan', ruanganRoutes);
router.use('/artikel', artikelRoutes);
router.use('/flyer', flyerRoutes);
router.use('/booking/konseling', bookingRoutes);
router.use('/booking/penunjang', bookingRoutes);

module.exports = router;