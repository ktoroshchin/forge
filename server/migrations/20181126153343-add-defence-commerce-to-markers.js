'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('markers', 'defences', {
        type: Sequelize.TEXT,
        allowNull: true
      }),
      queryInterface.addColumn('markers', 'commerce', {
        type: Sequelize.TEXT,
        allowNull: true
      })
    ])
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('markers', 'defences'),
      queryInterface.removeColumn('markers', 'commerce')
    ])
  }
};