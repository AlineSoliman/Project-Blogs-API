const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategories", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return PostCategory;
};

module.exports = PostCategory;