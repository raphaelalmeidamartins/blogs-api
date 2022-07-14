'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_categories', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        field: 'category_id',
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts')
  }
};
