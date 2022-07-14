const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
    underscored: false,
  });

  return Category;
};
