const db = require('../models');
const Category = db.category;
const Op = db.Sequelize.Op;

//getAll
exports.findAll = (req, res) => {
  const name = req.body.name;
  var conditions = name ? {name: { [Op.like]: `%${name}%` } } : null;

  Category.findAll({ where: conditions })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ 
        message:
          err.message || 'Failed to find category'
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
  const category = {
    name: req.body.name,
    description: req.body.description
  };

  // Save in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category."
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  
  Category.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Category update successfully',
        });
      } else {
        res.send({
          messsage: `Cannot update category with id = ${id}. Maybe category is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not update category with id = ' + id 
      });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Category.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Category deleted successfully',
        });
      } else {
        res.send({
          messsage: `Cannot delete category with id = ${id}. Maybe category is not found` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete category with id = ' + id 
      });
    });
};