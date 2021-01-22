const express = require('express');
const peopleController = require('../controllers/peopleController');
const peopleRouter = express.Router();

peopleRouter.get('/people', peopleController.getAllPerson);
peopleRouter.post('/people', peopleController.addPerson);
peopleRouter.delete('/people/:personId', peopleController.deletePerson);

module.exports = peopleRouter;
