const router = require('express').Router();
const { Posts, User } = require('../models');
const checkAuth = require('../utils/auth');

// loads blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password', 'email'] },
    }],
      attributes: { exclude: ['content'] },
      order: [['name', 'ASC']],
    });

    const posts = postData.map((project) => project.get({ plain: true }));
    res.render('homepage', {
      posts,
      // gives the template the logged in status
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;