'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeConstraint('maps', 'maps_world_id_fkey'),
      queryInterface.removeConstraint('markers', 'markers_map_id_fkey')
    ])

    return Promise.all([
      queryInterface.dropTable('maps'),
      queryInterface.createTable('world_maps', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        world_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'worlds', key: 'id'
          }
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        width: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
      queryInterface.createTable('marker_maps', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        marker_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'markers', key: 'id'
          }
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        width: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
      })
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('world_maps'),
      queryInterface.dropTable('marker_maps'),
      queryInterface.createTable('maps', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        world_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'worlds', key: 'id'
          }
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        width: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        world_map: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
      })
    ])
  }
};