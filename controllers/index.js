const router = require('express').Router();

const apiRoutes = require('./apis');
const mainRoutes = require('./mainroutes');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;