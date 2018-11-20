'use strict';
module.exports = (sequelize, DataTypes) => {
  const map = sequelize.define('map', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    world_map: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});
  map.associate = function(models) {
    // associations can be defined here
    map.belongsTo(models.world, {foreignKey: 'world_id', targetKey: 'id'});
  };
  return map;
};