'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    username: DataTypes.STRING,
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.worlds = user.hasMany(models.world, { foreignKey: 'creator_id' });
  };
  return user;
};