const express = require('express');
const peopleController = require('../controllers/peopleController');
const peopleRouter = express.Router();

peopleRouter.get('/people', peopleController.getAllPerson);
peopleRouter.post('/people', peopleController.addPerson);

module.exports = peopleRouter;
