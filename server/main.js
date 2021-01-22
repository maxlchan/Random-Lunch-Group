const express = require('express');
const createError = require('http-errors');
const initLoader = require('./loaders');
const dbLoader = require('./loaders/db');
const peopleRouter = require('./routes/peopleRouter');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

dbLoader();
initLoader(app);

app.use('/api', peopleRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err);

  err.status
    ? res.status(err.status).json({ result: err.message })
    : res.status(500).json({ result: 'Internal Server Error' });
});

app.listen(4000, () => console.log('Lunch app is listening on port 4000!'));

module.exports = app;
