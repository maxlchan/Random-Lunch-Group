const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv');
const initLoader = require('./loaders');
const dbLoader = require('./loaders/db');
const peopleRouter = require('./routes/peopleRouter');
const { ROUTES, MESSAGE } = require('./constants');
const app = express();

dotenv.config();

dbLoader();
initLoader(app);

app.use(ROUTES.api, peopleRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err);

  err.status
    ? res.status(err.status).json({ result: err.message })
    : res.status(500).json({ result: MESSAGE.internalServerError });
});

app.listen(4000, () => console.log('Lunch app is listening on port 4000!'));

module.exports = app;
