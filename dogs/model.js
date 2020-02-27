const db = require('../data/dbConfig');

module.exports = {
    allDogs,
    findDog,
    findById,
    addDog
}

function allDogs() {
    return db('dogs')
}

function findDog(id) {
    return db('dogs as d')
        .join('rescues as r', 'r.id', 'd.rescue_id')
        .select('d.name', 'd.breed', 'd.age', 'r.name')
        .where('r.id', id)
}

function findById(id) {
    return db('dogs')
        .select('*')
        .where({id})
        .first();
}

function addDog(dog) {
    return db('dogs')
        .insert(dog, 'id')
}