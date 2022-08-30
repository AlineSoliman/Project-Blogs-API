const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });


  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: PostCategory,
      foreignKey: "id",
      otherKey: "postId",
    });
  };

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategory,
      foreignKey: "id",
      otherKey: "categoryId",
    });
  };

  return PostCategory;
};

module.exports = PostCategory;