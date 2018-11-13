const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(`${process.env.DB_URL}`, { operatorsAliases: false })

db.authenticate().then(() => {
  console.log(`Connected to the database`)
}).catch(err => {
  console.log(`Unable to connect to the database`, err)
})
