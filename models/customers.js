module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
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
      }, {
        tableName: 'customer',
      });      
      return Customer;
};
