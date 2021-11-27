const router = require('express').Router();
const { Pets } = require('../../models');

// get pets based on their species
router.get('/:type', (req, res) => {
    Pets.findAll({
        where: {
            type: req.params.type
        },
        attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: `There are no ${type}'s at our center :(`});
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
});

module.exports = router;