const router = require('express').Router();
const { Pets } = require('../models');

router.get('/:type', (req, res) => {
    Pets.findAll({
        where: {
            type: req.body.type
        },
        attributes: ['petname', 'age', 'sex', 'description']
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: `No ${type}'s found`})
            return;
        }
        const pet = dbPetData.get({ plain: true });
        res.render('pets', { pet, loggedIn: req.session.loggedIn })
    })
})

module.exports = router;