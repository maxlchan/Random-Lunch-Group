const peopleService = require('../services/peopleService');

exports.getAllPerson = async (req, res, next) => {
  try {
    const people = await peopleService.getAllPerson();

    res.status(200).json({ result: 'ok', people });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.addPerson = async (req, res, next) => {
  try {
    const { name } = req.body;
    const person = await peopleService.addPerson(name);

    res.status(201).json({ result: 'ok', person });
  } catch (err) {
    console.log(err);
    next(err);
  }
};