'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeConstraint('cities', 'cities_map_id_fkey'),
      queryInterface.removeConstraint('cities', 'cities_world_id_fkey'),
      queryInterface.removeConstraint('towns', 'towns_map_id_fkey'),
      queryInterface.removeConstraint('towns', 'towns_world_id_fkey'),
      queryInterface.removeConstraint('locations', 'locations_map_id_fkey'),
      queryInterface.removeConstraint('locations', 'locations_world_id_fkey')
    ])

    return Promise.all([
      queryInterface.dropTable('cities'),
      queryInterface.dropTable('towns'),
      queryInterface.dropTable('locations'),
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('cities', {
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
        map_id: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'maps', key: 'id'
          }
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: true
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
      }),queryInterface.createTable('towns', {
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
        map_id: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'maps', key: 'id'
          }
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: true
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
      }),queryInterface.createTable('locations', {
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
        map_id: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'maps', key: 'id'
          }
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
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
      }),
    ])
  }
};