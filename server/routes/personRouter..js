const express = require('express');
const personController = require('../controllers/personController');
const personRouter = express.Router();

personRouter.post('/people', personController.addPerson);

module.exports = personRouter;
