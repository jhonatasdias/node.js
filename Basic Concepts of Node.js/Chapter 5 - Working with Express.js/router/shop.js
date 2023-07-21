const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop')

// Solicitando a array de dados em admin

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;