const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Categories", {
    name: DataTypes.STRING,
  });

  return Category;
};

module.exports = Category;