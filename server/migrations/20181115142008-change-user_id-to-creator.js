'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('worlds', 'worlds_user_id_fkey').then(() => {
      return queryInterface.renameColumn('worlds', 'user_id', 'creator').then(() => {
        return queryInterface.addConstraint('worlds', ['creator'], {
          type: 'foreign key',
          name: 'worlds_creator_fkey',
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
    return queryInterface.removeConstraint('worlds', 'worlds_creator_fkey').then(() => {
      return queryInterface.renameColumn('worlds', 'creator', 'user_id').then(() => {
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

// worlds_user_id_fkey on table worlds