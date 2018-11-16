'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('markers', null, {}).then(() => {
      queryInterface.bulkInsert('markers', [
        {
          id: '36459b63-7884-4ba6-a912-83b9a4d10eda',
          map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          latitude: 1082.08203125,
          longitude: 632.3359375
        }, {
          id: '93de7391-5a9b-413e-bd4f-1cbc6b07cdf4',
          map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          latitude: 1116.7421875,
          longitude: 608.4921875
        }, {
          id: '94a3b9a2-6514-402f-8069-c1c0d878cbe1',
          map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
          latitude: 1203.931640625,
          longitude: 679.41162109375
        },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('markers', null, {});
  }
};
