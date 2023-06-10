const router = require('express').Router();
const userRoute = require('./userroute');

router.use('/users', userRoute);

module.exports = router;