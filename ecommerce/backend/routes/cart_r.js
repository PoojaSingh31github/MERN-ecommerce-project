const router = require("express").Router();
const {
  AddtoCart,
  DeleteCart,
  AddQuantity,
  MinusQuantity,
  EmptyCart,
  CartByUserId,
  ShowCart,
  GetCartItems,
} = require("../controllers/cart_c");
const auth = require("../middleware/auth");

router.post("/addToCart/:productId", auth, AddtoCart);
router.get("/GetCartItems",  GetCartItems);
router.delete("/deleteCart/:productID", auth, DeleteCart);
router.get("/addQuantity/:productID", AddQuantity);
router.get("/minusQuantity/:productID", MinusQuantity);
router.delete("/cartEmpty", EmptyCart);
router.get("/cartByuserId",auth, CartByUserId);
router.get("/ShowCart", ShowCart);

module.exports = router;
