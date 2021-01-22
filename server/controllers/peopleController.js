const peopleService = require('../services/peopleService');
const { MESSAGE } = require('../constants');

exports.getAllPerson = async (req, res, next) => {
  try {
    const people = await peopleService.getAllPerson();

    res.status(200).json({ result: MESSAGE.ok, people });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.addPerson = async (req, res, next) => {
  try {
    const { name } = req.body;
    const person = await peopleService.addPerson(name);

    res.status(201).json({ result: MESSAGE.created, person });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.deletePerson = async (req, res, next) => {
  try {
    const { personId } = req.params;
    await peopleService.deletePerson(personId);

    res.status(200).json({ result: MESSAGE.ok });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
