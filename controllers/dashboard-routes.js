const router = require('express').Router();
const { Users, Pets, Likes } = require('../models');
const withAuth = require('../utils/auth');


// get all pets the user liked
router.get('/', withAuth, (req, res) => {
    // Pets.findAll({
    //     where: {
    //         
    //     },
    //     attributes: ['petId', 'petname', 'sex']
    // })
    // .then(dbPetData => {
    //     const pets = dbPetData.map(pet => pet.get({ plain: true }))
        // res.render('dashboard', { pets, loggedIn: true })
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // })
})

module.exports = router;