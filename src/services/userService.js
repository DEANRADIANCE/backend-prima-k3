// Service layer untuk User
// Berisi business logic dan operasi data user

// Data dummy (dalam aplikasi nyata, ini akan menggunakan database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
];

// Ambil semua users
const getAllUsers = async () => {
  return users;
};

// Ambil user berdasarkan ID
const getUserById = async (id) => {
  return users.find(user => user.id === parseInt(id));
};

// Buat user baru
const createUser = async (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData
  };
  users.push(newUser);
  return newUser;
};

// Update user berdasarkan ID
const updateUser = async (id, userData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) {
    return null;
  }
  users[index] = { ...users[index], ...userData };
  return users[index];
};

// Hapus user berdasarkan ID
const deleteUser = async (id) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) {
    return false;
  }
  users.splice(index, 1);
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
