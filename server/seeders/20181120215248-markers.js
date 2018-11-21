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
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude:  2069.26953125,
        latitude: 1265.5625,
        name: 'Piho',
        description: 'A booming human religious town. It is home to the Church of Piety, a racist religious \
                      order which indoctrinates it\'s followers by making them kill a non-human to join.',
        population: 4600,
        government: 'Theocracy',
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2170.75,
        latitude: 1211.466796875,
        name: 'Bol',
        description: 'A coastal fishing town east of Wolfrest. It\'s main source of money is \
                      the fish they salt and export to the City.',
        population: 1080,
        government: 'Aristocracy',
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2332.46484375,
        latitude: 1194.564453125,
        name: 'Zezima',
        description: 'A small fortress inhabited by strong soldiers who have defected from Wolfrest. \
                      They live in open rebellion to the throne and hope to gain many followers in their \
                      quest to liberate the citizens of Wolfrest.',
        population: 350,
        government: 'Kraterocracy',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('markers', null, {});
  }
};
