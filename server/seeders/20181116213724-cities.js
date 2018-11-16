'use strict';
const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {}).then(() => {
      queryInterface.bulkInsert('cities', [
        {
          id: uuid(),
          marker_id: '36459b63-7884-4ba6-a912-83b9a4d10eda',
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: 'Wolfrest',
          population: 185778,
          government: 'Aristocraty',
          description: 'A kingdom build on iron and blood. They have two twins sisters as their leaders. They have the titles of \'Warrior Queens\'. They are hated by their citizens'
        }, {
          id: uuid(),
          marker_id: null,
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          name: 'Jeena',
          population: null,
          government: null,
          description: 'The rival kingdom of Wolfrest'
        },
      ], {});
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
