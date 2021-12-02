const router = require('express').Router();
const { Pets } = require('../../models');

// get cats 
router.get('/', (req, res) => {
    Pets.findAll({
        where: {
            type: 'cat'
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
        res.status(500).json(err);
    })
});

module.exports = router;