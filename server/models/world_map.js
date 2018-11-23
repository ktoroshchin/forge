'use strict';
module.exports = (sequelize, DataTypes) => {
  const world_map = sequelize.define('world_map', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});
  world_map.associate = function(models) {
    world_map.markers = world_map.hasMany(models.marker, {foreignKey: 'map_id'});
    world_map.belongsTo(models.world, {foreignKey: 'world_id', targetKey: 'id'});
  };
  return world_map;
};