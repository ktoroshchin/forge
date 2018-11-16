'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {}).then(() => {
      queryInterface.bulkInsert('locations', [
        {
          id: uuid(),
          marker_id: '94a3b9a2-6514-402f-8069-c1c0d878cbe1',
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: 'Barren Wilds',
          description: 'Desolate plains'
        }, {
          id: uuid(),
          marker_id: null,
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: faker.lorem.word(),
          description: null
        }, {
          id: uuid(),
          marker_id: null,
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
