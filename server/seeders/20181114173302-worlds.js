'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {}).then(() => {
      queryInterface.bulkInsert('worlds', [
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2) },
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2) },
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2) },
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2) },
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2) },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {});
  }
};
