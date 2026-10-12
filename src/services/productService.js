// Service layer untuk Product
// Berisi business logic dan operasi data product

// Data dummy (dalam aplikasi nyata, ini akan menggunakan database)
let products = [
  { id: 1, name: 'Laptop', price: 15000000, stock: 10 },
  { id: 2, name: 'Mouse', price: 150000, stock: 50 }
];

// Ambil semua products
const getAllProducts = async () => {
  return products;
};

// Ambil product berdasarkan ID
const getProductById = async (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Buat product baru
const createProduct = async (productData) => {
  const newProduct = {
    id: products.length + 1,
    ...productData
  };
  products.push(newProduct);
  return newProduct;
};

// Update product berdasarkan ID
const updateProduct = async (id, productData) => {
  const index = products.findIndex(product => product.id === parseInt(id));
  if (index === -1) {
    return null;
  }
  products[index] = { ...products[index], ...productData };
  return products[index];
};

// Hapus product berdasarkan ID
const deleteProduct = async (id) => {
  const index = products.findIndex(product => product.id === parseInt(id));
  if (index === -1) {
    return false;
  }
  products.splice(index, 1);
  return true;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
