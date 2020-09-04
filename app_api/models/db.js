const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/MaualUpdate';
mongoose.connect(dbURI, {useNewUrlParser: true});
const readLine = require ('readline');
const { connect } = require('http2');

let dbURL = 'mongodb://127.0.0.1/manualupdate';
// let dbURL = 'mongodb://localhost/manualupdate';
if (process.env.NODE_ENV === 'production') {
    dbURL = process.env.DB_HOST || process.env.MONGOODB_URI;
}


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
  
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:' + err);
    return connect();
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  if (process.platform === 'win32') {
    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.on ('SIGINT', () => {
      process.emit("SIGINT");
    });
  }

  const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
  };  
  // For nodemon restarts
  process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
    });
  });
  // For app termination
  process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
  });
  // For Heroku app termination 
  process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
      process.exit(0);
    });
  });

  // connect();

  require('./results');