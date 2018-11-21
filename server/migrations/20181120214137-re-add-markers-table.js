'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('markers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      category:{
        type: Sequelize.STRING,
        allowNull: false
      },
      world_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'worlds', key: 'id'
        }
      },
      map_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'maps', key: 'id'
        }
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
        type: Sequelize.TEXT
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
    return
  }
};