const router = require('express').Router();
const { Pets } = require('../models');

// show all the pets
router.get('/:petId', (req, res) => {
    Pets.findOne({
        where: {
            petId: req.body.petId
        },
        attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet found with this id :(' });
            return;
        }
        const pet = dbPetData.get({ plain: true })
        res.render('single-pet', { pet, loggedIn: req.session.loggedIn })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;