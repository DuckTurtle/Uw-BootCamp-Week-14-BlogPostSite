const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
  {
   /* id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },*/
    name: DataTypes.STRING,
    
    content: DataTypes.STRING,
    },
   /* date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
    }
  },*/
  {
    sequelize,
   /* timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',*/
  }
);

module.exports = Posts;