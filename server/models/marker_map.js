'use strict';
module.exports = (sequelize, DataTypes) => {
  const marker_map = sequelize.define('marker_map', {
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
  marker_map.associate = function(models) {
    marker_map.belongsTo(models.marker, {foreignKey: 'marker_id', targetKey: 'id'});
  };
  return marker_map;
};