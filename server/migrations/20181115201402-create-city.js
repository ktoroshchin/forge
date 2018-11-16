'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      marker_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'markers', key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      population: {
        type: Sequelize.INTEGER
      },
      government: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cities');
  }
};