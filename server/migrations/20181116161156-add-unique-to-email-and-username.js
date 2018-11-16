'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'username'),
      queryInterface.removeColumn('users', 'email')
    ]).then(() => {
      return Promise.all([
        queryInterface.addColumn('users', 'username', {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        }),
        queryInterface.addColumn('users', 'email', {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        })
      ])
    })
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'username'),
      queryInterface.removeColumn('users', 'email')
    ]).then(() => {
      return Promise.all([
        queryInterface.addColumn('users', 'username', {
          type: Sequelize.STRING,
          allowNull: false,
        }),
        queryInterface.addColumn('users', 'email', {
          type: Sequelize.STRING,
          allowNull: false,
        })
      ])
    })
  }
};