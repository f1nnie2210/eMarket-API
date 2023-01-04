const db = require('../models');
const Customer = db.customer;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.name;
  var conditions = name ? {name: { [Op.like]: `%${name}%` } } : null;

  Customer.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find customer'
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
  const customer = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    loyalty_points: req.body.loyalty_points,
  };

  // Save in the database
  Customer.create(customer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Customer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Customer update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update customer with id = ${id}. Maybe customer is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update customer with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Customer deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete customer with id = ${id}. Maybe customer is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete customer with id = ' + id 
      });
    });
};