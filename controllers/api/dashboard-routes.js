const router = require('express').Router();
const { Users, Pets, Likes } = require('../../models');

// routes for api/dashboard

// get userinfo
router.get('/', (req, res) => {
    Users.findAll({
        attributes: { exclude: ['passwordHash', 'registeredAt', 'lastLogin', 'profile'] }
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// get all liked pets
// router.get('/', (req, res) => {
//     User.findAll({
//         include: [
//             {

//             }
//         ]
//     })
// })

module.exports = router;