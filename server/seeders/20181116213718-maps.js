'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('maps', null, {}).then(() => {
      queryInterface.bulkInsert('maps', [
        {
          id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          url: 'https://www.online-tabletop.com/wp-content/uploads/2017/01/tutoriala.jpg',
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          world_map: true,
          height: 1024,
          width: 2048
        },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('maps', null, {});
  }
};
