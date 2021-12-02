const router = require('express').Router();
const { Pets, Users } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

// render the login template if the user is not already logged in
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;