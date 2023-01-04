module.exports = (sequelize, Sequelize) => {
    const InventoryProduct = sequelize.define('inventory_warehouse', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
    }, {
      timestamps: false,
      tableName: 'inventory_warehouse',
    });
  
    return InventoryProduct;
  };
  
  