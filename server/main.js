const express = require('express');
const createError = require('http-errors');
const initLoader = require('./loaders');
const dbLoader = require('./loaders/db');
const personRouter = require('./routes/personRouter.');
const app = express();

dbLoader();
initLoader(app);

app.use('/api', personRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err);

  err.status
    ? res.status(err.status).json({ result: err.message })
    : res.status(500).json({ result: RESPONSE.INTERNAL_SEVER_ERROR });
});

app.listen(2018, () => console.log('Lunch app is listening on port 2018!'));

module.exports = app;