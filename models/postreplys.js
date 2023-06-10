const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PostReplys extends Model { }

PostReplys.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
        unique: false
      }
    },
    reply_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reply',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_replys',
  }
);

module.exports = PostReplys;