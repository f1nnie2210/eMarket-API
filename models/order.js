module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {
        order_date: {
        type: Sequelize.DATE,
        allowNull: false
        },
        total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
        }
    }, {
        tableName: 'order',
      });    

    return Order
}