const dbConfig = require('../config/db.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customerType = require('../models/customerType')(sequelize, Sequelize);
db.customer = require('../models/customers') (sequelize, Sequelize);
db.category = require('../models/category')(sequelize, Sequelize);

db.customer.belongsTo(db.customerType, {
    foreignKey: 'customer_type_id',
});

module.exports = db;