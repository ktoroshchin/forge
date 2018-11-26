'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('npcs', {
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
        world_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'worlds', key: 'id'
          }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
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
      }),
      queryInterface.createTable('interesting_places', {
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
        world_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'worlds', key: 'id'
          }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
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
      }),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeConstraint('npcs', 'npcs_marker_id_fkey'),
      queryInterface.removeConstraint('npcs', 'npcs_world_id_fkey'),
      queryInterface.removeConstraint('interesting_places', 'interesting_places_marker_id_fkey'),
      queryInterface.removeConstraint('interesting_places', 'interesting_places_world_id_fkey')
    ]);
    return Promise.all([
      queryInterface.dropTable('npcs'),
      queryInterface.dropTable('interesting_places'),
    ])
  }
};