'use strict';
module.exports = (sequelize, DataTypes) => {
  const map = sequelize.define('map', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    world_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'world', key: 'id'
      }
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
  };
  return map;
};