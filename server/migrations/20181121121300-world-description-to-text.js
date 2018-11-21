'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('worlds', 'description')
    return queryInterface.addColumn('worlds', 'description', {
      type: Sequelize.TEXT
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('worlds', 'description')
    return queryInterface.addColumn('worlds', 'description', {
      type: Sequelize.STRING
    })
  }
};