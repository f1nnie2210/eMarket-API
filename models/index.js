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
db.inventory = require('../models/inventory')(sequelize, Sequelize);
db.inventoryproduct = require('../models/inventory_product')(sequelize, Sequelize);
db.inventorywarehouse = require('../models/inventory_warehouse')(sequelize, Sequelize);
db.debt = require('../models/debt')(sequelize, Sequelize);
db.supplier = require('../models/supplier')(sequelize, Sequelize)


db.customerType.hasMany(db.customer, {
    foreignKey: 'customer_type_id',
});

db.category.hasMany(db.product, {
    foreignKey: 'category_id',
});

db.inventory.belongsToMany(db.product, {
    through: db.inventoryproduct,
    foreignKey: 'inventory_id',
});
db.product.belongsToMany(db.inventory, {
    through: db.inventoryproduct,
    foreignKey: 'product_id',
});

db.inventory.belongsToMany(db.warehouse,{
    through: db.inventorywarehouse,
    foreignKey: 'inventory_id',
});
db.warehouse.belongsToMany(db.inventory,{
    through: db.inventorywarehouse,
    foreignKey: 'warehouse_id',
});

db.customer.hasMany(db.debt,{
    foreignKey: 'customer_id',
});
db.supplier.hasMany(db.debt,{
    foreignKey: 'supplier_id',
});

module.exports = db;
