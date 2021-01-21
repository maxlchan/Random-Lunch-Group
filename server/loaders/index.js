const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');

const initLoader = (app) => {
  app.use(compress());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  // app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

module.exports = initLoader;
