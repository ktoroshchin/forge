'use strict';
const faker = require('faker');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {}).then(() => {
      queryInterface.bulkInsert('users', [
        { id: '7597283c-0a43-4be5-bc73-95280f3c0c5f', username: faker.internet.userName(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: bcrypt.hashSync('qwertyuiop') },
        { id: uuid(), username: faker.internet.userName(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: bcrypt.hashSync(faker.internet.password()) },
        { id: uuid(), username: faker.internet.userName(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: bcrypt.hashSync(faker.internet.password()) },
        { id: uuid(), username: faker.internet.userName(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: bcrypt.hashSync(faker.internet.password()) },
        { id: uuid(), username: faker.internet.userName(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: bcrypt.hashSync(faker.internet.password()) },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
