const productModel = require('../models/products_m');
const orderModel = require('../models/order_m');
const CustModel = require('../models/user_m');

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity, category, image, rating, comments } = req.body;
    const productinDB = await productModel.findOne({name:name});
    if (productinDB) {
      return res.status(500).json({ error: "product with this name is already added" });
    }else{
      const newProduct = new productModel({
        name,
        price,
        quantity,
        category,
        image,
        rating,
        comments
      });
  
      const data = await newProduct.save();
      res.status(201).json({ message: 'Product added successfully', data });
    } 
    }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Edit Product By Id
exports.editProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, price, quantity, category, image, rating, comments } = req.body;
    const result = await productModel.findByIdAndUpdate({_id: productId} ,{ name, price, quantity, category, image, rating, comments}, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete Product By Id
exports.deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await productModel.findByIdAndDelete(productId);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await CustModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
