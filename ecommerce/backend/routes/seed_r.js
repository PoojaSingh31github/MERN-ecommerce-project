const express = require('express');
const router = express.Router();
const { seedUsers, seedProducts } = require('../controllers/seed_c');

router.post('/seedUsers', seedUsers);
router.post('/seedProducts', seedProducts);

module.exports = router;
