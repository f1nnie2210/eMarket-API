const db = require('../models');
const CustomerType = db.customerType;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.customer_type_name;
  var conditions = name ? {customer_type_name: { [Op.like]: `%${name}%` } } : null;

  CustomerType.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find customer type'
      });
    });
};

//create and save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customer_type_name || !req.body.discount_percentage) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const customertype = {
    customer_type_name: req.body.customer_type_name,
    discount_percentage: req.body.discount_percentage,
  };

  // Save in the database
  CustomerType.create(customertype)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer type."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  CustomerType.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Customer type update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update customer type with id = ${id}. Maybe customer type is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update customer type with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  CustomerType.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Customer type deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete customer type with id = ${id}. Maybe customer type is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete customer type with id = ' + id 
      });
    });
};