const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('categories', {
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
  });

  return Category;
};
