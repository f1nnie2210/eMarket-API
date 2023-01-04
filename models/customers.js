const { CustomerTypes } = require('../models/customerType');

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customers', {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        loyalty_points: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      });
      
      return Customer;
};
