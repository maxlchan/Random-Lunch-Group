const express = require('express');
const peopleController = require('../controllers/peopleController');
const { ROUTES } = require('../constants');
const peopleRouter = express.Router();

peopleRouter.get(ROUTES.people.root, peopleController.getAllPerson);
peopleRouter.post(ROUTES.people.root, peopleController.addPerson);
peopleRouter.delete(ROUTES.people.detail, peopleController.deletePerson);

module.exports = peopleRouter;
