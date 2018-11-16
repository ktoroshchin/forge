'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('cities', 'world_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'worlds', key: 'id'
        }
      }),
      queryInterface.addColumn('towns', 'world_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'worlds', key: 'id'
        }
      }),
      queryInterface.addColumn('locations', 'world_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'worlds', key: 'id'
        }
      }),
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('cities', 'cities_world_id_fkey').then(() => {
        queryInterface.removeColumn('cities', 'world_id');
      }),
      queryInterface.removeConstraint('towns', 'towns_world_id_fkey').then(() => {
        queryInterface.removeColumn('towns', 'world_id');
      }),
      queryInterface.removeConstraint('locations', 'locations_world_id_fkey').then(() => {
        queryInterface.removeColumn('locations', 'world_id');
      })
    ])
  }
};
