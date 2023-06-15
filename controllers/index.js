const router = require('express').Router();

const apiRoutes = require('./apis');
const mainRoute = require('./mainroute');

router.use('/', mainRoute);
router.use('/api', apiRoutes);

module.exports = router;