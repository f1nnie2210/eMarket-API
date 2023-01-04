module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define('inventory', {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sold: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    minQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    maxQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'inventory',
  });

  return Inventory;
};
