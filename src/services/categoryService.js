const { Category } = require('../database/models');

const createCategoryService = async (validate) => {
  const result = await Category.create(validate);
  return result;
};

const getCategoriesService = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { createCategoryService, getCategoriesService };
