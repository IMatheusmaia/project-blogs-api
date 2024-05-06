const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
{
  tableName: 'users',
  timestamps: false,
  underscored: true,
});
  return User;
};

module.exports = userModel;