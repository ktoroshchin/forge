'use strict';
module.exports = (sequelize, DataTypes) => {
  const world = sequelize.define('world', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  world.associate = function (models) {
    // associations can be defined here
    world.belongsTo(models.user, {foreignKey: 'creator_id', targetKey: 'id'});
    world.maps = world.hasMany(models.map, {foreignKey: 'world_id'});
    world.markers = world.hasMany(models.marker, {foreignKey: 'world_id'});
  };
  return world;
};