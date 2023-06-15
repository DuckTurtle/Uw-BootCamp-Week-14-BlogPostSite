const User = require('./user');
const Posts = require('./posts');
const Reply = require('./replys');
//const PostReplys = require('./replys');
const { post } = require('../controllers');


Posts.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  Reply.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  Posts.hasMany(Reply,{
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });
  /*User.hasMany(Reply,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Posts.hasMany(Reply,{
    through: {
      model: PostReplys,
      unique:false
    },
  });
  Reply.belongsTo(Posts,{
    through: {
        model: PostReplys,
        unique:false
      },
  });*/

module.exports = { User, Posts, Reply, /*PostReplys*/ };