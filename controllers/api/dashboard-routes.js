const router = router('express').Router();
const { User, Pet, Like } = require('../../models');

// routes for api/dashboard

// get userinfo
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Pet,
                attributes: ['name'],
                through: Like,
                as: 'liked-pets'
            }
        ]
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