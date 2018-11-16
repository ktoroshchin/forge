'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('markers', 'latitude'),
      queryInterface.removeColumn('markers', 'longitude')])
      .then(() => {
        return Promise.all([
          queryInterface.addColumn('markers', 'latitude', {
            type: Sequelize.FLOAT,
            allowNull: false,
          }),
          queryInterface.addColumn('markers', 'longitude', {
            type: Sequelize.FLOAT,
            allowNull: false,
          })
        ])
      })
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('markers', 'latitude'),
      queryInterface.removeColumn('markers', 'longitude')])
      .then(() => {
        return Promise.all([
          queryInterface.addColumn('markers', 'latitude', {
            type: Sequelize.INTEGER,
            allowNull: false,
          }),
          queryInterface.addColumn('markers', 'longitude', {
            type: Sequelize.INTEGER,
            allowNull: false,
          })
        ])
      })
  }
};