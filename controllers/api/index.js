const router = require('express').Router();

const dashRoutes = require('./dashboard-routes');
const petRoutes = require('./pet-routes');
const petTypeRoutes = require('./type-routes');

router.use('/dashboard', dashRoutes);
router.use('/pets', petRoutes);
router.use('/type', petTypeRoutes);
// router.use('/pet', singlePetRoute);

module.exports = router;