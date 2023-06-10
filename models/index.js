const User = require('./user');
const Posts = require('./posts');
const Replys = require('./replys');
const PostReplys = require('./replys');
const { post } = require('../controllers');


Posts.belongsTo(User,{
    foreignKey: 'user_id'
  });

  Replys.belongsTo(User,{
    foreignKey: 'user_id'
  });
  User.hasMany(Posts,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  User.hasMany(Replys,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Posts.hasMany(Replys,{
    through: {
      model: PostReplys,
      unique:false
    },
  });
  Replys.belongsTo(Posts,{
    through: {
        model: PostReplys,
        unique:false
      },
  });

module.exports = { User, Posts, Replys, PostReplys };