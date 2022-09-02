const postsService = require('../services/postsService');

const getPostsController = async (req, res, _next) => {
    const result = await postsService.getPostsService();
    return res.status(200).json(result);
};

module.exports = { getPostsController };