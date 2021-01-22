const mongoose = require('mongoose');

const dbLoader = () => {
  mongoose.connect(
    process.env.MONGO_DB_URL,
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
