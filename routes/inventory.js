module.exports = app => {
    const inventory = require('../controllers/inventory.js');

    var router = require('express').Router();

    router.get('/', inventory.findAll);
    router.post('/', inventory.create);
    router.put('/:id', inventory.update);
    router.delete('/:id', inventory.delete);

    app.use('/api/inventory', router);
};