const router = require('express').Router();
const petRoutes = require('./pet-routes');
const petTypeRoutes = require('./type-routes');
const userRoutes = require('./user-routes');
const catRoutes = require('./cat-routes');

router.use('/pets', petRoutes);
router.use('/type', petTypeRoutes);
router.use('/users', userRoutes);
router.use('/cats', catRoutes);

module.exports = router;