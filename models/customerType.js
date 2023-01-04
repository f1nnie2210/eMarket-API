module.exports = (sequelize, Sequelize) => {
  const CustomerType = sequelize.define('customer_types', {
    customer_type_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    discount_percentage: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
      },
    });

  return CustomerType
};