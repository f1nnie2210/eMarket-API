module.exports = app => {
    const category = require('../controllers/category.js');

    var router = require('express').Router();

    router.get('/', category.findAll);
    router.post('/', category.create);
    router.put('/:id', category.update);
    router.delete('/:id', category.delete);

    app.use('/api/category', router);
};