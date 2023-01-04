module.exports = (sequelize, Sequelize) => {
    const OrderProduct = sequelize.define('order_product', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        }
      }, {
        timestamps: false,
        tableName: 'order_product',
      });

    return OrderProduct
}
