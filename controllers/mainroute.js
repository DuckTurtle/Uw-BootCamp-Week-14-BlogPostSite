const router = require('express').Router();
const { User } = require('../models');
const checkAuth = require('../utils/auth');

// makes people log in before they can view home page
router.get('/', checkAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render('homepage', {
      users,
      // gives the template the logged in status
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if their logged in then redirect them to home page.
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;