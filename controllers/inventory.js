const db = require('../models');
const Inventory = db.inventory;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  Inventory.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find inventory',
      });
    });
};

//create and save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quantity || !req.body.sold || !req.body.min_quantity || !req.body.max_quantity) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const inventory = {
    quantity: req.body.name,
    sold: req.body.price,
    min_quantity: req.body.min_quantity,
    max_quantity: req.body.max_quantity,
  };

  // Save in the database
  Inventory.create(inventory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the inventory."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Inventory.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Inventory update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update inventory with id = ${id}. Maybe inventory is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update inventory with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Inventory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Inventory deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete inventory with id = ${id}. Maybe inventory is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete inventory with id = ' + id 
      });
    });
};