const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(`${process.env.DB_URL}`, { operatorsAliases: false })

db.authenticate().then(() => {
  console.log(`Connected to the database`)
}).catch(err => {
  console.log(`Unable to connect to the database`, err)
})

const user = db.define('user', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
  },
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT,
  email: Sequelize.TEXT,
});

module.exports.user = user;