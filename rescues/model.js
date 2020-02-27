const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('rescues')
        .select('*');
}

function findBy(filter) {
    return db('rescues')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('rescues')
        .select('*')
        .where({id})
        .first();
}

function add(rescue) {
    return db('rescues')
        .insert(rescue, 'id')
        .then(ids => {
            return findById(ids);
        })
}