'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('worlds', 'user_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users', key: 'id'
      }
    }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('worlds', 'user_id');
  }
};
