// const rootDir = require('../utils/path');
const shopController = require('../Controllers/shop');

const express = require('express');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart' , shopController.getCart);
router.get('/checkout', shopController.getCheckout);


module.exports = router;