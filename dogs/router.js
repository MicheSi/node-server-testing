const router = require('express').Router();

const Dogs = require('./model');

router.get('/', (req, res) => {
    Dogs.allDogs()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/', (req, res) => {
    const dog = req.body;

    Dogs.addDog(dog)
        .then(ids => {
            res.status(201).json({added: ids[0]});
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;