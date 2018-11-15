'use strict';
module.exports = (sequelize, DataTypes) => {
  const marker = sequelize.define('marker', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    map_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'maps', key: 'id'
      }
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});
  marker.associate = function (models) {
    // associations can be defined here
  };
  return marker;
};