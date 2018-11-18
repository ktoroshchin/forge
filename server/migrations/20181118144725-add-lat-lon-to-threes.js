'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('cities', 'latitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('towns', 'latitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('locations', 'latitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('cities', 'longitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('towns', 'longitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('locations', 'longitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      })
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('cities', 'latitude'),
      queryInterface.removeColumn('cities', 'longitude'),
      queryInterface.removeColumn('towns', 'latitude'),
      queryInterface.removeColumn('towns', 'longitude'),
      queryInterface.removeColumn('locations', 'latitude'),
      queryInterface.removeColumn('locations', 'longitude')
    ])
  }
};