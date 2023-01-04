module.exports = app => {
    const warehouse = require('../controllers/warehouse.js');

    var router = require('express').Router();

    router.get('/', warehouse.findAll);
    router.post('/', warehouse.create);
    router.put('/:id', warehouse.update);
    router.delete('/:id', warehouse.delete);

    app.use('/api/warehouse', router);
};