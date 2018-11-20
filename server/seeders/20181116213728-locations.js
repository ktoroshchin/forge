'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {}).then(() => {
      queryInterface.bulkInsert('locations', [
        {
          id: uuid(),
          map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          longitude: 1203.931640625,
          latitude: 679.41162109375,
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: 'Barren Wilds',
          description: 'Desolate plains'
        }, {
          id: uuid(),
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          description: null
        }, {
          id: uuid(),
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.words(2),
          description: null
        },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};
