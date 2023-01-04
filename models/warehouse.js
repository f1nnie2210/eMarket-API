module.exports = (sequelize, Sequelize) => {    
    const Warehouse = sequelize.define('warehouse', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'warehouse',
      });    

      return Warehouse
} 