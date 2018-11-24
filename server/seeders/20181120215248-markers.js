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
        category: 'City',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 650.1640625,
        latitude: 1135.96875,
        name: 'Akhad',
        description: 'A kingdom built under the Barren Wilds. The ceiling of sand is supported by the three arch-wizards of the city',
        government: 'Confederation',
        population: 24000
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
        longitude: 2069.26953125,
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
      }, {
        id: '1ecc79d9-dd03-44f5-a2b2-08689c553342',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        latitude: 1606.92180,
        longitude: 2045.010457,
        name: 'Forde',
        description: 'A town up in the mountain range of Houi. They live primarily off of Rocky birds.',
        population: 1200,
        government: null,
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        latitude: 1622.31511710433,
        longitude: 1204.328125,
        name: 'The Mountain Range of Houi',
        description: 'It longs the whole north perimeter of the continent. The north side is littered with the unknown',
        population: null,
        government: null,
      },

      {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'City',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 495.55979418027,
        longitude: 689.978515625,
        name: 'Specter',
        description: 'North America\'s remnants. The city is located in an intricate system of tunnels with few expeditions sent to the surface',
        population: 450000,
        government: 'Autocracy',
      }, {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'Location',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 386.654719659333,
        longitude: 921.921875,
        name: 'White Désolation',
        description: 'After the french nuclear reactor exploded due to a terrorist attack back in the year 2409, the whole of Europe has become a radiaded wasteland.',
        population: null,
        government: null,
      }, {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'Town',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 380.531848828957,
        longitude: 998.517578125,
        name: 'EDEN Project',
        description: 'Multiple scientists live there trying to rid Ymir of its new glacial age.',
        population: 130,
        government: 'Democrary',
      }
    ], {}).then(() => {
      queryInterface.bulkInsert('marker_maps', [
        {
          id: uuid(),
          url: 'https://i.redd.it/5t9oottzvgdy.jpg',
          marker_id: '1ecc79d9-dd03-44f5-a2b2-08689c553342',
          height: 653,
          width: 851
        }
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('marker_maps', null, {})

    return queryInterface.bulkDelete('markers', null, {})
  }
};
