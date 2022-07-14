const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'BlogPosts',
    underscored: false,
    timestamp: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  /* Como redefinir o nome das colunas createdAt e updatedAt https://stackoverflow.com/questions/29828676/change-default-column-name-sequelize */

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users'
    });
  }

  return BlogPost;
};
