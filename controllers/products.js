const db = require('../models');
const Product = db.products;;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.name;
  var conditions = name ? {name: { [Op.like]: `%${name}%` } } : null;

  Product.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find product'
      });
    });
};

//create and save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const product = {
    name: req.body.name,
    price: req.body.price,
    expiration_date: req.body.expiration_date,
  };

  // Save in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Product update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update product with id = ${id}. Maybe product is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update product with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Product deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete product with id = ${id}. Maybe product is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete product with id = ' + id 
      });
    });
};