const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin:  "https://localhost:8081"
};

app.use(cors(corsOptions));

// parse request of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//databese
const db = require('./models')
// db.sequelize.sync()
//   .then(() => {
//     console.log('Synced db.');
//   })
//   .catch((err) => {
//     console.log('Failed to sync db: '+ err.message);
//   });

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to application'})
});

require('./routes/customerType.js') (app)
require('./routes/customers.js') (app)
require('./routes/category.js') (app)
require('./routes/products.js') (app)
require('./routes/warehouse.js') (app)
require('./routes/inventory.js') (app)
require('./routes/supplier.js') (app)

//connect
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

