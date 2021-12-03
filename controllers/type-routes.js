const router = require('express').Router();
const { Pets } = require('../models');


// Get all pets of selected type
router.get('/:type', (req, res) => {
    Pets.findAll({
        attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description'],
        where: {
            type: req.params.type
        }
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: `No ${type}'s found`})
            return;
        }
        res.json(dbPetData);
        
        const pets = dbPetData.map(pets => pets.get({ plain: true }));
        res.render('pets', { pets, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// // get pet types 
// router.get('/', (req, res) => {
//     Pets.findAll({
//         attributes: ['type']
//     })
//     .then(dbPetData => {
//         if (!dbPetData) {
//             res.status(404).json({ message: `There are no ${type}'s at our center :(`});
//             return;
//         }
//         var typesArray = [];
//         for(i=0; i<dbPetData.length; i++) {
//             // push pet type into typesArray if it does not exist in the array already.
//             if(!typesArray.includes(dbPetData[i].type)) {
//                 typesArray.push(dbPetData[i].type);
//             }
//         }
//         res.json(typesArray);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(404).json(err);
//     });
// });


module.exports = router;

