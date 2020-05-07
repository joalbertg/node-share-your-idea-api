const mongoose = require('mongoose');

const container = require('./src/startup/container');

const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

mongoose.set('useCreateIndex', true);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => server.start())
  .catch(console.log);

