const postCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true
        },
      categoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true
      },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId', });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId', });
  };
  return PostCategory;
};


module.exports = postCategoryModel;