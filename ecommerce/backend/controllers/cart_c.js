const router = require("express").Router();
const auth = require("../middleware/auth");
const Cart = require("../models/cart_m");

// Add to Cart
const AddtoCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userID = req.user._id;
    let data;
    let userCart = await Cart.findOne({ user: userID });
    let quantity = 1;
    if (userCart) {
      let existProduct = userCart.items.find(
        (p) => p.product.toString() === productId.toString()
      );
      // console.log(existProduct);
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        const productdetails = {
          product: productId,
          quantity: quantity,
        };
        userCart.items.push(productdetails);
      }
      data = await userCart.save();
    } else {
      const newCart = new Cart({
        user: userID,
        items: [
          {
            product: productId,
            quantity: quantity,
          },
        ],
      });
      data = await newCart.save();
    }
    return res.status(201).json({ cart: data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get cart item 
const GetCartItems = async (req, res) => {
  try {
    const userCart = await Cart.find().populate("items.product", "name image");
    if (userCart) {
     return res.status(200).json(userCart);
    } else {
     return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete from Cart
const DeleteCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user;
    const userCart = await Cart.findOne({ user: userId });
    if (userCart) {
      const newCart = userCart.items.filter(
        (p) => p.product !== productId
      );
      userCart.items = newCart;
      await userCart.save();
      res.status(200).json({ message: "Item deleted from cart successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Increase Quantity
const AddQuantity = async (req, res) => {
 try {
    const userId = req.user.id;
    const productID = req.params.productID;
    const userCart = await Cart.findOne({ user: userId });
    if (userCart){
      const item = userCart.items.find(
        (item) => item.product.toString() === productID
      );
      if (item){
        item.quantity += 1;
        await userCart.save();
        return res.status(200).json({ message: "Quantity increased successfully" });
      } else{
        return res.status(404).json({ message: "Item not found in cart" });
      }
    }

 } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
 }
};

// Decrease Quantity
const MinusQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const productID = req.params.productID;
    const userCart = await Cart.findOne({ user: userId });
    if (userCart) {
      const item = userCart.items.find(
        (item) => item.product.toString() === productID
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          await userCart.save();
        return  res.status(200).json({ message: "Quantity decreased successfully" });
        } else {
          // If the quantity is 1, remove the item from the cart
          userCart.items = userCart.items.filter(
            (item) => item.product.toString() !== productID
          );
          await userCart.save();
          res.status(200).json({ message: "Item removed from cart successfully" });
        }
      } else {
        res.status(404).json({ message: "Item not found in cart" });
      }
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Empty Cart
const EmptyCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const userCart = await Cart.findOne({ user: userId });
    if (userCart) {
      userCart.items = [];
      await userCart.save();
      res.status(200).json({ message: "Cart emptied successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get Cart by User ID
const CartByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const userCart = await Cart.findOne({ user: userId }).populate("items.product", "name image price");
    if (userCart) {
      res.status(200).json(userCart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Show Cart
const ShowCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const userCart = await Cart.findOne({ user: userId }).populate(
      "items.product"
    );

    if (userCart) {
      res.status(200).json(userCart.items);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  AddtoCart,
  GetCartItems,
  DeleteCart,
  AddQuantity,
  MinusQuantity,
  EmptyCart,
  CartByUserId,
  ShowCart,
};
