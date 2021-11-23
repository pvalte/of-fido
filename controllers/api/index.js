const router = require('express').Router();

const dashRoutes = require('./dashboard-routes');
const petRoutes = require('./pet-routes');

router.use('/dashboard', dashRoutes)
router.use('/pets', petRoutes)

module.exports = router;