const supabase = require('../config/supabase');

const protect = async (req, res, next) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        success: false,
        message: 'Supabase belum dikonfigurasi. Isi variabel .env terlebih dahulu.'
      });
    }

    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid token' 
      });
    }
    
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid or expired token' 
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      message: error.message 
    });
  }
};

const requireAdmin = (req, res, next) => {
  if (req.user?.user_metadata?.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Akses hanya tersedia untuk admin.'
    });
  }
  next();
};

module.exports = { protect, requireAdmin };