const { validateCategory } = require('../middlewares/userValidation');
const { createCategoryService } = require('../services/categoryService');

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

module.exports = { createCategoryController };