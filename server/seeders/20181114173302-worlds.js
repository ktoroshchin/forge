'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('worlds', [
      {
        id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        name: 'Vilmus',
        description: 'A world full of surprises at every corner',
        creator_id: '865a8777-59cf-48d3-95d1-f20195912553'
      },
      {
        id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        name: 'Ymir, the new Earth',
        description: 'Planet Earth, after years of getting it\'s ressources extracted, is now a frozen landscape covered in steam. The temperature is around minus 20 degrees celcius during the summer',
        creator_id: '865a8777-59cf-48d3-95d1-f20195912553'
      },
      {
        id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'El\'Karath',
        description: '',
        creator_id: 'd276a825-9501-4ab3-a4c0-888011937571'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {});
  }
};
