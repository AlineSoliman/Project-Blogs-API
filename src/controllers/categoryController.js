const { validateCategory } = require('../middlewares/userValidation');
const { createCategoryService, getCategoriesService } = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { body } = req;
  const validate = validateCategory(body);
  console.log(validate);
  try {
    const result = await createCategoryService(body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const getCategoriesController = async (req, res, _next) => {
  try {
    const result = await getCategoriesService();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro' });
  }
};

module.exports = { createCategoryController, getCategoriesController };