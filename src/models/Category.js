const categoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  },
{
  tableName: 'categories',
  timestamps: false,
  underscored: true,
});
  return Category;
};

module.exports = categoryModel;