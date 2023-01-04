const db = require('../models');
const Supplier = db.supplier;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.name;
  var conditions = name ? {name: { [Op.like]: `%${name}%` } } : null;

  Supplier.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find supplier'
      });
    });
};

//create and save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.address || !req.body.phone || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const supplier = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email
  };

  // Save in the database
  Supplier.create(supplier)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the supplier."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Supplier.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Supplier update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update supplier with id = ${id}. Maybe suppler is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update supplier with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Supplier.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Supplier deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete supplier with id = ${id}. Maybe supplier is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete supplier with id = ' + id 
      });
    });
};