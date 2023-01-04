module.exports = (sequelize, Sequelize) => {
  const InventoryProduct = sequelize.define('inventory_product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  }, {
    timestamps: false,
    tableName: 'inventory_product',
  });

  return InventoryProduct;
};

