const router = require('express').Router();
const { Users, Pets, Likes } = require('../models');
const withAuth = require('../utils/auth');


// get all pets the user liked
router.get('/', withAuth, (req, res) => {
    Users.findOne({
        attributes: { exclude: ['passwordHash'] },
        where: {
            userId: req.session.userId
        },
        include: [
            {
                model: Pets,
                attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description', 'imgurl'],
                through: Likes,
                as: 'liked_pets'
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id found' })
                return;
            }
            const dbPetData = dbUserData.liked_pets;
            const pets = dbPetData.map(pet => pet.get({ plain: true }))
            res.render('dashboard', { pets, loggedIn: true })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;