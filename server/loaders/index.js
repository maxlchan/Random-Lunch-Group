const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const initLoader = (app) => {
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

module.exports = initLoader;
