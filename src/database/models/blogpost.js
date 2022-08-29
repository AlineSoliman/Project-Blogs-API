const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },  {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName:'BlogPosts',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId"
    });
  }
  return BlogPost;
};

module.exports = BlogPost;