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
    updated_at: DataTypes.DATE,
    creator_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user', key: 'id'
      }
    }
  }, {});
  world.associate = function (models) {
    // associations can be defined here
  };
  return world;
};