const db = require('../models');
const Warehouse = db.warehouse;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.name;
  var conditions = name ? {name: { [Op.like]: `%${name}%` } } : null;

  Warehouse.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find warehouse'
      });
    });
};

//create and save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.location) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const warehouse = {
    name: req.body.name,
    location: req.body.location
  };

  // Save in the database
  Warehouse.create(warehouse)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the warehouse."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Warehouse.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Warehouse update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update warehouse with id = ${id}. Maybe warehouse is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update warehouse with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Warehouse.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Warehouse deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete warehouse with id = ${id}. Maybe warehouse is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete warehouse with id = ' + id 
      });
    });
};