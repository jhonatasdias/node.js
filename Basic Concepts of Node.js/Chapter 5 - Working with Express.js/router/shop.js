const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); // => __dirname, '../'
const adminData = require('./admin');

// Solicitando a array de dados em admin

const router = express.Router();

router.get('/', (req, res, next) => {
    /* console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir,'views', 'shop.html')); */
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop',
        hasProduct: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;