'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towns', null, {}).then(() => {
      queryInterface.bulkInsert('towns', [
        {
          id: uuid(),
          marker_id: '93de7391-5a9b-413e-bd4f-1cbc6b07cdf4',
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          population: 120,
          government: null,
          description: null
        }, {
          id: uuid(),
          marker_id: null,
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          population: null,
          government: null,
          description: null
        }, {
          id: uuid(),
          marker_id: null,
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
