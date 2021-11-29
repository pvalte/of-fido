const router = require('express').Router();
const { Users } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        
    })
});

// // post route for sign up/create a user
// router.post('/signup', (req, res) => {
//     Users.create({
//         username: req.body.username,
//         email: req.body.email,
//         passwordHash: req.body.passwordHash
//     })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

// // post route for login/ expect something like {name: 'name', email: 'email', password: 'password'}
// router.post('/login', (req, res) => {
//     Users.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(dbUserData => {
//         if (!dbUserData) {
//             res.status(400).json({ message: 'No user with that email address!' });
//             return;
//         }
//         res.json({ user: dbUserData, message: 'You are now logged in' });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

module.exports = router;