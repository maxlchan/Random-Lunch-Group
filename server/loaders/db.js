const mongoose = require('mongoose');

const dbLoader = () => {
  mongoose.connect(
    'mongodb+srv://maxlchan:kcj5614541@codewars.wtb08.mongodb.net/lunch?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => console.log('db connect!'));
};

module.exports = dbLoader;
