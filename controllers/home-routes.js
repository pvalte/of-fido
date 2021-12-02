const router = require('express').Router();
const { Pets, Users } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

// render the login template if the user is not already logged in
router.get('/login', (req, res) => {
    if (req.session.userId) {
        console.log('You are already logged in');
        res.redirect('/');
        return;
    } else {
        res.render('login', {
            loggedIn: req.session.loggedIn
        });
    }
});

module.exports = router;