module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        expiration_date: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        tableName: 'product',
      });
    return Product
};