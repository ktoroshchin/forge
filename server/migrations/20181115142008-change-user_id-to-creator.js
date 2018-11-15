'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('worlds', 'user_id', 'creator')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('worlds', 'creator', 'user_id')
  }
};
