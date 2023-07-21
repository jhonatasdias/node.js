const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    /* console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir,'views', 'shop.html')); */
    /* const products = adminData.products; */
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            path: '/product',
            prods: products, 
            pageTitle: 'All Products',
            /* hasProduct: products.length > 0,
            activeShop: true,
            productCSS: true */
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            path: '/',
            prods: products, 
            pageTitle: 'Shop',
            /* hasProduct: products.length > 0,
            activeShop: true,
            productCSS: true */
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart', 
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders', 
        pageTitle: 'Your Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}