const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const rescuesRouter = require('../rescues/router');
const dogsRouter = require('../dogs/router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/rescues', rescuesRouter);
server.use('/api/dogs', dogsRouter);

server.get('/', (req, res) => {
    res.send('API is running')
})

module.exports = server;