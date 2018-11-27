'use strict';
module.exports = (sequelize, DataTypes) => {
  const marker = sequelize.define('marker', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false
    },
    world_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'worlds', key: 'id'
      }
    },
    map_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'maps', key: 'id'
      }
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    population: DataTypes.INTEGER,
    government: DataTypes.STRING,
    commerce: DataTypes.STRING,
    defences: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  marker.associate = function (models) {
    marker.map = marker.hasOne(models.marker_map, {foreignKey: 'marker_id'});
    marker.belongsTo(models.world_map, {foreignKey: 'map_id', targetKey: 'id'});
    marker.belongsTo(models.world, {foreignKey: 'world_id', targetKey: 'id'});
  };
  return marker;
};