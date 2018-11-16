'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    marker_id: {
      type: DataTypes.UUID,
      allowNull: true,
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
  city.associate = function (models) {
    // associations can be defined here
  };
  return city;
};