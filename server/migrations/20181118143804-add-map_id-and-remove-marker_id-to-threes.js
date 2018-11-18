'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('cities', 'map_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'maps', key: 'id'
        }
      }),
      queryInterface.addColumn('towns', 'map_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'maps', key: 'id'
        }
      }),
      queryInterface.addColumn('locations', 'map_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'maps', key: 'id'
        }
      }),
      queryInterface.removeColumn('cities', 'marker_id'),
      queryInterface.removeColumn('towns', 'marker_id'),
      queryInterface.removeColumn('locations', 'marker_id')
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('cities', 'marker_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'markers', key: 'id'
        }
      }),
      queryInterface.addColumn('towns', 'marker_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'markers', key: 'id'
        }
      }),
      queryInterface.addColumn('locations', 'marker_id', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'markers', key: 'id'
        }
      }),
      queryInterface.removeConstraint('cities', 'cities_map_id_fkey').then(() => {
        queryInterface.removeColumn('cities', 'map_id');
      }),
      queryInterface.removeConstraint('towns', 'towns_map_id_fkey').then(() => {
        queryInterface.removeColumn('towns', 'map_id');
      }),
      queryInterface.removeConstraint('locations', 'locations_map_id_fkey').then(() => {
        queryInterface.removeColumn('locations', 'map_id');
      })
    ])
  }
};