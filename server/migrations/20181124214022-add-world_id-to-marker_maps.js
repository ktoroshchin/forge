'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('marker_maps', 'world_id', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'worlds', key: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('marker_maps', 'marker_maps_world_id_fkey')
    queryInterface.removeColumn('marker_maps', 'world_id')
  }
};