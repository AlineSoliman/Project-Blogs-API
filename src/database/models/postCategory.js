const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: { model: 'BlogPosts', key: 'id'}
    },
    categoryId:  {
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: { model: 'Categories', key: 'id'}
    },
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: PostCategory,
      foreignKey: "postId"
    });
  models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategory,
      foreignKey: "categoryId"
    });
  };
  return PostCategory;
};

module.exports = PostCategory;