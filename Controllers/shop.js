const Product = require('../Models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAllProducts(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAllProducts(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
}

exports.getCart = (req, res, next) => {
  Product.fetchAllProducts(products => {
    res.render('shop/cart', {
      prods: products,
      pageTitle: 'Your Cart',
      path: '/cart'
    });
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    prods: products,
    pageTitle: 'Checkout',
    path: '/checkout'
  });
}