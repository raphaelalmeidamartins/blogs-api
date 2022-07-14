const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.User, {
      foreignKey: 'userId', as: 'users'
    });

    PostCategory.belongsToMany(models.Categories, {
      foreignKey: 'categoryId', as: 'categories'
    });
  }

  return PostCategory;
};
