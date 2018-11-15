'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {}).then(() => {
      queryInterface.bulkInsert('worlds', [
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2), creator_id: '7597283c-0a43-4be5-bc73-95280f3c0c5f' },
        { id: uuid(), name: faker.lorem.word(), description: faker.lorem.sentences(2), creator_id: '7597283c-0a43-4be5-bc73-95280f3c0c5f' },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {});
  }
};
