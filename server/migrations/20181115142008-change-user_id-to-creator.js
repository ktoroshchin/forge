'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('worlds', 'worlds_user_id_fkey').then(() => {
      return queryInterface.renameColumn('worlds', 'user_id', 'creator_id').then(() => {
        return queryInterface.addConstraint('worlds', ['creator_id'], {
          type: 'foreign key',
          name: 'worlds_creator_id_fkey',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade',
        });
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('worlds', 'worlds_creator_id_fkey').then(() => {
      return queryInterface.renameColumn('worlds', 'creator_id', 'user_id').then(() => {
        return queryInterface.addConstraint('worlds', ['user_id'], {
          type: 'foreign key',
          name: 'worlds_user_id_fkey',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade',
        });
      })
    })
  }
};