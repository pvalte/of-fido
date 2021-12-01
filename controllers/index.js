const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes')
const petRoutes = require('./pet-routes')
const typeRoutes = require('./type-routes');

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);
router.use('/pet', petRoutes);
router.use('/type', typeRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;