"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      emailAddress: { type: DataTypes.STRING(255), allowNull: false },
      firstname: { type: DataTypes.STRING(50), allowNull: false },
      lastName: { type: DataTypes.STRING(50), allowNull: false },
      hashedPassword: { type: DataTypes.STRING.BINARY, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
