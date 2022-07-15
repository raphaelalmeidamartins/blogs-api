const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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
      foreignKey: 'userId', as: 'user'
    });
  }

  return BlogPost;
};
