'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('cities', 'cities_marker_id_fkey').then(() =>
      queryInterface.removeConstraint('towns', 'towns_marker_id_fkey').then(() =>
        queryInterface.removeConstraint('locations', 'locations_marker_id_fkey')).then(() =>
          queryInterface.dropTable('markers')))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('markers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      map_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'maps', key: 'id'
        }
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  }
};