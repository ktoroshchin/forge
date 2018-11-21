'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('markers', [
      {
        id: uuid(),
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        longitude: 1082.08203125,
        latitude: 632.3359375,
        name: 'Wolfrest',
        population: 185778,
        government: 'Aristocraty',
        description: 'A kingdom build on iron and blood. They have two twins sisters as their leaders. They have the titles of \'Warrior Queens\'. They are hated by their citizens'
      }, {
        id: uuid(),
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        name: 'Jeena',
        population: null,
        government: null,
        description: 'The rival kingdom of Wolfrest'
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 1116.7421875,
        latitude: 608.4921875,
        name: faker.lorem.word(),
        population: 120,
        government: null,
        description: null
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        name: faker.lorem.word(),
        population: null,
        government: null,
        description: null
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        name: faker.lorem.word(),
        population: null,
        government: null,
        description: null
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 1203.931640625,
        latitude: 679.41162109375,
        name: 'Barren Wilds',
        description: 'Desolate plains'
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        name: faker.lorem.word(),
        description: null
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        name: faker.lorem.words(2),
        description: null
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('markers', null, {});
  }
};
