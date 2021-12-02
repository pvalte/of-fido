const router = require('express').Router();
const { Pets } = require('../models');

router.get('/:type', (req, res) => {
    Pets.findAll({
        where: {
            type: req.params.type
        },
        attributes: ['petname', 'age', 'sex', 'description']
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: `No ${type}'s found`})
            return;
        }
        // res.json(dbPetData);
        
        const pets = dbPetData.map(pets => pets.get({ plain: true }));
        res.render('pets', { pets, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Pets.findAll({
//     attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
// })
// .then(dbPetData => {
//     const pets = dbPetData.map(pets => pets.get({ plain: true }));
//     res.render('pets', { pets, loggedIn: true });
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });

module.exports = router;