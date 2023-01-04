module.exports = app => {
    const supplier= require('../controllers/supplier.js');

    var router = require('express').Router();

    router.get('/', supplier.findAll);
    router.post('/', supplier.create);
    router.put('/:id', supplier.update);
    router.delete('/:id', supplier.delete);

    app.use('/api/supplier', router);
};