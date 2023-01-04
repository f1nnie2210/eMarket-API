module.exports = (sequelize, Sequelize) => {
    const Debt = sequelize.define('debt', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
        tableName: 'debt',
    });

    return Debt
}