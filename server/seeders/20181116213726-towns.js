'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towns', null, {}).then(() => {
      queryInterface.bulkInsert('towns', [
        {
          id: uuid(),
          map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          latitude: 1116.7421875,
          longitude: 608.4921875,
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          population: 120,
          government: null,
          description: null
        }, {
          id: uuid(),
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          population: null,
          government: null,
          description: null
        }, {
          id: uuid(),
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          population: null,
          government: null,
          description: null
        },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towns', null, {});
  }
};
