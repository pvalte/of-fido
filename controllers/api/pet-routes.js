const router = require('express').Router();
const { Pets, Likes } = require('../../models');

// routes for api/pets
// get all pets module 14 activity 22
router.get('/', (req, res) => {
    Pets.findAll({
        attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
    }).then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    })
});

// // // get a single pet
router.get('/:petId', (req, res) => {
    Pets.findOne({
        where: {
            petId: req.params.petId
        },
        attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
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
    Pets.create({
        petname: req.body.petname,
        age: req.body.age,
        sex: req.body.sex,
        type: req.body.type,
        breed: req.body.breed,
        description: req.body.description        
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// // // put request /api/pets/like
router.put('/like', (req, res) => {
    if (req.session) {   
        Likes.create({
            uid: req.body.uid,
            pid: req.body.pid
        }).then(() => {
            return Pets.findOne({
                where: {
                    id: req.body.petId
                },
                attributes: ['petname', 'age', 'sex', 'type', 'breed', 'description']
            })
            .then(likedPetData => res.json(likedPetData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
        })
    }
})

// // // put request in case an animal needs to get updated or changed at all
// // router.put('/:petId', (req, res) => {
// //     Pets.update(
// //         {
// //             petname: req.body.petname,
// //             age: req.body.age,
// //             sex: req.body.sex,
// //             type: req.body.type,
// //             breed: req.body.breed,
// //             description: req.body.description 
// //         },
// //         {
// //             where: {
// //                 petId: req.body.petId
// //             }
// //         }
// //     )
// //     .then(dbPetData => {
// //         if (!dbPetData) {
// //             res.status(404).json({ message: 'No pet with this id found' });
// //             return;
// //         }
// //         res.json(dbPetData);
// //     })
// //     .catch(err => {
// //         console.log(err);
// //         res.status(500).json(err);
// //     })
// // })

module.exports = router;