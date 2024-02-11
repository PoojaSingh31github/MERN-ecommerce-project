const Product = require('../models/products_m');
const Customer = require('../models/user_m');
const Order = require('../models/order_m');


// Seed Users
exports.seedUsers = async (req, res) => {
  try {
    const adminUser = new Customer({
      name: 'Admin User',
      email: 'admin@example.com',
      username: 'admin',
      address: 'Admin Address',
      password: await bcrypt.hash('adminpassword', 10),
      isAdmin: true
    });

    const normalUser = new Customer({
      name: 'Normal User',
      email: 'user@example.com',
      username: 'user',
      address: 'User Address',
      password: await bcrypt.hash('userpassword', 10)
    });

    await adminUser.save();
    await normalUser.save();

    res.status(201).json({ message: 'Users seeded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Seed Products
exports.seedProducts = async (req, res) => {
  try {
    const products = [
      {
        name: 'Product 1',
        price: 19.99,
        quantity: 50,
        category: 'Category A',
        image: 'product1.jpg',
        rating: 4.5,
        comments: ['Great product!', 'Highly recommended']
      },
      // Add more products as needed
    ];

    await Product.insertMany(products);

    res.status(201).json({ message: 'Products seeded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
