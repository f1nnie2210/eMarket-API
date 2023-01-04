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
db.customer = require('../models/customers')(sequelize, Sequelize);
db.category = require('../models/category')(sequelize, Sequelize);
db.product = require('../models/products')(sequelize, Sequelize);
db.warehouse = require('../models/warehouse')(sequelize, Sequelize);

db.customerType.hasMany(db.customer, {
    foreignKey: 'customer_type_id',
});

db.category.hasMany(db.product, {
    foreignKey: 'category_id',
});

module.exports = db;
