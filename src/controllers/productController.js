// Controller untuk Product
// Berisi logic untuk menangani request product

const productService = require('../services/productService');

// Ambil semua products
const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json({
      success: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// Ambil product berdasarkan ID
const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product tidak ditemukan'
      });
    }
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// Buat product baru
const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: 'Product berhasil dibuat',
      data: newProduct
    });
  } catch (error) {
    next(error);
  }
};

// Update product berdasarkan ID
const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product tidak ditemukan'
      });
    }
    res.json({
      success: true,
      message: 'Product berhasil diupdate',
      data: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

// Hapus product berdasarkan ID
const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Product tidak ditemukan'
      });
    }
    res.json({
      success: true,
      message: 'Product berhasil dihapus'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
