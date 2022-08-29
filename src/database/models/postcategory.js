const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return PostCategory;
};

module.exports = PostCategory;