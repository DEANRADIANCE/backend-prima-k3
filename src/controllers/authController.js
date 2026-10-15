const authModel = require('../models/authModel');
const supabase = require('../config/supabase');

const login = async (req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      message: 'Supabase belum dikonfigurasi. Isi variabel .env terlebih dahulu.'
    });
  }

  try {
    const { username, email, password } = req.body;
    const authData = await authModel.login({ username, email, password });
    res.json({
      success: true,
      data: {
        access_token: authData.session.access_token,
        refresh_token: authData.session.refresh_token,
        user: authData.user,
        profile: authData.profile
      }
    });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

const signup = async (req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      message: 'Supabase belum dikonfigurasi. Isi variabel .env terlebih dahulu.'
    });
  }

  try {
    const profile = await authModel.signup(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    const conflict = /already|duplicate|unique/i.test(error.message);
    res.status(conflict ? 409 : 400).json({ success: false, message: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await authModel.getProfile(userId);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    await authModel.logout();
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  login,
  signup,
  profile,
  logout
};