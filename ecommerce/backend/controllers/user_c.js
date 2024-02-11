const OrderModel = require('../models/order_m');
const productModel = require('../models/products_m')
const CustModel = require('../models/user_m');
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const { JWT_SECRET } = require("../config");


const register = async (req, res) => {
  try {
    const { name, username, email, password, address } = req.body;
    if (!name || !username || !password || !email || !address) {
      return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }

    const userInDB = await CustModel.findOne({ email: email });

    if (userInDB) {
      return res.status(500).json({ error: "User with this email is already registered" });
    }

    const hashedpassword = await bcryptjs.hash(password, 10);

    const user = new CustModel({ name, username, email, password: hashedpassword, address });
    const newUser = await user.save();

    if (newUser) {
      return res.status(201).json({ result: "User Signed up successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }

    const userInDB = await CustModel.findOne({ email: email });

    if (!userInDB) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const didMatch = await bcryptjs.compare(password, userInDB.password);

    if (didMatch) {
      const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
      const userInfo = { "email": userInDB.email, "fullname": userInDB.fullname,"id": userInDB._id, "isadmin":userInDB.isAdmin };

      return res.status(200).json({ result: { token: jwtToken, user: userInfo, message: "user successfully login"} });
    } else {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

const getAllproducts = async (req, res) => {
  try {
    const products = await productModel.find();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getProductByID = async (req, res) => {
  try {
    const product = await productModel.findOne({_id:req.params.id});
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const profile = async (req, res) => {
  try {
    const ID = req.params['id'];
    const user = await CustModel.findById(ID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const GetAllOrderByUserId = async (req, res) => {
  try {
    const custId=req.params['id'];
    const orders = await OrderModel.find({ custId }); // faced problem here to get id 
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const AddOrderByUserId = async (req, res) => {
  try {
    const { custId, amount, address, products } = req.body;
    const newOrder = new OrderModel({
      custId,
      amount,
      address,
      products
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  register,
  login,
  getAllproducts,
  getProductByID,
  profile,
  GetAllOrderByUserId,
  AddOrderByUserId
}