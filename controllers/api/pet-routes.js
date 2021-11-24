const router = router('express').Router();
const { Pet, Like } = require("../../models");


// routes for api/pets
// get all pets module 14 activity 22
router.get('/', (req, res) => {
    Pet.findAll({
        attributes: ['name', 'species']
    }).then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
});

// get pets based on their species
router.get('/category/:species', (req, res) => {
    Pet.findAll({
        where: {
            species: req.params.species
        },
        attributes: ['name']
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: `There are no ${species} at our center :(`});
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
});

// get a single pet
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['name']
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet with this id found' });
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// route to create a pet
router.post('/', (req, res) => {
    Pet.create({
        name: req.body.name,
        species: req.body.species
    }).then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
})

// put request /api/pets/like
router.put('/like', (req, res) => {
    Pet.like(req.body, { Like })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// put request in case an animal needs to get updated or changed at all
router.put('/:id', (req, res) => {
    Pet.update(
        {
            name: req.body.name
        }
    )
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet with this id found' });
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;