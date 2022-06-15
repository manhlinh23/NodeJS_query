'use strict'

module.exports = function(app){
    var productsCtrl = require('./controller/productController');
    app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.insert)
    app.route('/products/:productId')
    .get(productsCtrl.detail)
    .delete(productsCtrl.delete)
    .put(productsCtrl.update)
}