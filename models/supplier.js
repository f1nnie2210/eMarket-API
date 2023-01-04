module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('supplier', {
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
    }
}, {
    tableName: 'supplier',
  });
  
  return Supplier
}
