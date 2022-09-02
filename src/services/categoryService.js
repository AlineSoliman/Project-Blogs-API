const { Category } = require('../database/models');

const createCategoryService = async (validate) => {
  console.log(validate, 'service');
  const result = await Category.create(validate);
  console.log(result, 'aquiii');
  return result;
};

const getCategoriesService = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { createCategoryService, getCategoriesService };
