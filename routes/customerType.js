module.exports = app => {
    const customertype = require('../controllers/customerType.js');

    var router = require('express').Router();

    //get all customer types
    router.get('/', customertype.findAll);
    router.post('/', customertype.create);
    router.put('/:id', customertype.update);
    router.delete('/:id', customertype.delete);

    app.use('/api/customertypes', router);
};