const router = require('express').Router();
const { User,Posts, PostReplys } = require('../models');
const Reply = require('../models/replys');
const checkAuth = require('../utils/auth');

// loads blog posts
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id,{
      include: [
        {
            model: Reply, 
            through: PostReplys,
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password', 'email'] },
                }
            ],
            order: [['name', 'ASC']],
        },
    {
        model: User,
        attributes: { exclude: ['password', 'email'] },
    }]
    })
// maps post data and renders the view handle bar.
    const posts = postData.map((project) => project.get({ plain: true }));
    res.render('postview', {
      posts,
      // gives the template the logged in status
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;