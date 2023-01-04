module.exports = app => {
    const product = require('../controllers/products.js');

    var router = require('express').Router();

    router.get('/', product.findAll);
    router.post('/', product.create);
    router.put('/:id', product.update);
    router.delete('/:id', product.delete);

    app.use('/api/product', router);
};