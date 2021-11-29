const router = require('express').Router();
const { Users, Pets, Likes } = require('../../models');

// POST api/users
router.post('/', (req, res) => {
    Users.create({
        username: req.body.username,
        email: req.body.email,
        passwordHash: req.body.passwordHash
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

})

// post api/users/login
router.post('/login', (req, res) => {
    Users.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
      req.session.save(() => {
        // declare session variables
        req.session.userId = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

  // log the user out
  router.post('/logout', (req, res) => {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
  })

  module.exports = router;