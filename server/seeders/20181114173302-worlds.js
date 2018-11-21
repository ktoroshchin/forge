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
        name: 'Ymir',
        description: 'A cold landscape covered in steamy territories. The temperature is around',
        creator_id: '865a8777-59cf-48d3-95d1-f20195912553'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('worlds', null, {});
  }
};
