const { BlogPost, User, Category } = require('../database/models');

const getPostsService = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  return result;
};

module.exports = { getPostsService };
