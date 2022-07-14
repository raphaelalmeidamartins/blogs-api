const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('categories', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'categories',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users'
    });
  }

  return BlogPost;
};
