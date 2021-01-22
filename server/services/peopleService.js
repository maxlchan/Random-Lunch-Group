const Person = require('../models/Person');

exports.getAllPerson = async () => {
  try {
    const people = await Person.find();

    return people;
  } catch (err) {
    throw new Error(err);
  }
};

exports.addPerson = async (name) => {
  try {
    const createdPerson = await Person.create({ name });

    return createdPerson;
  } catch (err) {
    throw new Error(err);
  }
};

exports.deletePerson = async (id) => {
  try {
    await Person.findByIdAndRemove(id);
  } catch (err) {
    throw new Error(err);
  }
};
