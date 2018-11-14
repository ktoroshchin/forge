'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {}).then(() => {
      queryInterface.bulkInsert('users', [
        { id: uuid(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
        { id: uuid(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
        { id: uuid(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
        { id: uuid(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
        { id: uuid(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
