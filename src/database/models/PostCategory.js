const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'PostCategories',
    timestamps: false,
    underscored: false,
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.User, {
      foreignKey: 'postId', as: 'BlogPosts'
    });

    PostCategory.belongsToMany(models.Categories, {
      foreignKey: 'categoryId', as: 'Categories'
    });
  }

  return PostCategory;
};
