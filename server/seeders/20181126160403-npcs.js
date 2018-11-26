'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('npcs', [
      // El'Karath: Norgrum
      {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Jarl Glint Ambershard',
        description: 'Current ruler of Norgrum. Third so sit on the throne from the Ambershard family.'
      }, {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Nalvarti Fastspark',
        description: 'Grand inventor of Norgrum. Invented the sentinels, firearms and the mechanical limbs some people have started to be fitted with, herself included.'
      }, {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Grimmalk Evermead',
        description: 'Foreman of the mines. Metal hand made by grand inventor, ever grateful for it.'
      }, {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Mulok Bristlecloak',
        description: 'Owner of the Lazy Harpy, the first magic shop to be opened in Norgrum. He has been around almsot as long as the city has and potentially the oldest dwarf in Norgrum at over 400 years old.'
      },
      // El'Karath: Illeysnore
      {
        id: uuid(),
        marker_id: 'f24b99ef-8340-456f-8205-266d9c4361d8',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Sarnan Thexidor',
        description: 'Elder female elf, once the headmaster of enchanting at the magic school, Castle Daemmerth. Now runs the Arcane Gateway, she still selects gifted students from the school to come work and learn from her.'
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('npcs', null, {});
  }
};
