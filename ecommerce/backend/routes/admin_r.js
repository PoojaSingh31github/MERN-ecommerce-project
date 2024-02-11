const express = require('express');
const router = express.Router();
const {addProduct, getAllProducts, editProductById, getAllUsers, getAllOrders, deleteProductById, }= require('../controllers/admin_c');

const auth = require('../middleware/auth');

router.post('/addProduct', auth,  addProduct);
router.get('/getAllProducts', getAllProducts);
router.put('/editProductById/:productId', auth,  editProductById);
router.delete('/deleteProductById/:productId', auth, deleteProductById);
router.get('/getAllUsers', auth,  getAllUsers);
router.get('/getAllOrders', auth,  getAllOrders);

module.exports = router;