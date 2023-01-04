module.exports = app => {
    const customer = require('../controllers/customers.js');

    var router = require('express').Router();

    router.get('/', customer.findAll);
    router.post('/', customer.create);
    router.put('/:id', customer.update);
    router.delete('/:id', customer.delete);

    app.use('/api/customer', router);
};