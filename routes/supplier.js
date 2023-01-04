module.exports = app => {
    const suppler= require('../controllers/supplier.js');

    var router = require('express').Router();

    router.get('/', suppler.findAll);
    router.post('/', suppler.create);
    router.put('/:id', suppler.update);
    router.delete('/:id', suppler.delete);

    app.use('/api/supplier', router);
};