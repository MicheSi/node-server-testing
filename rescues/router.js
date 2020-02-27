const router = require('express').Router();

const Rescues = require('./model');

router.get('/', (req, res) => {
    Rescues.find()
        .then(rescues => {
            res.status(200).json(rescues)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/', (req, res) => {
    const rescue = req.body;

    Rescues.add(rescue)
        .then(newRescue => {
            res.status(201).json(newRescue);
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;