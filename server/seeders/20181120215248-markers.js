'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('markers', [
      {
        id: uuid(),
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        longitude: 1642.7421875,
        latitude: 1153.5703125,
        name: 'Jeena',
        population: 12000,
        government: 'Noocracy',
        description: 'Many tribes of wood elves, eons ago, decided the best course of action for survival \
                      would be to band together into a common clan to better fend off the blights of The Great Forest of June.'
      }, {
        id: uuid(),
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        longitude: 2101.5,
        latitude: 1238.5390625,
        name: 'Wolfrest',
        description: 'A kingdom build on iron and blood. They have two twins sisters as their leaders. \
                      They have the titles of \'Warrior Queens\'. They are hated by their citizens.',
        government: 'Aristocraty',
        population: 185778
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 624.1640625,
        latitude: 1086.96875,
        name: 'Barren Wilds',
        description: 'Desolate plains to the west of civilization. No logical being live in those desert-like plains.',
        population: null,
        government: null,
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 1846.7109375,
        latitude: 1032.125,
        name: 'The Great Forest of June',
        description: 'A forest filled with dangerous beasts and various forms of blights.',
        population: null,
        government: null,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('markers', null, {});
  }
};
