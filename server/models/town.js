'use strict';
module.exports = (sequelize, DataTypes) => {
  const town = sequelize.define('town', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    marker_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'marker', key: 'id'
      }
    },
    name: DataTypes.STRING,
    population: DataTypes.INTEGER,
    government: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});
  town.associate = function (models) {
    // associations can be defined here
  };
  return town;
};