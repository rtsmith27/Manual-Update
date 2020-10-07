const mongoose = require('mongoose');
const readLine = require('readline');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let dbURL = 'mongodb://127.0.0.1/manualUpdate';
if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}


const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected' + dbURL);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
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

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

connect();



// BRING IN YOUR SCHEMAS & MODELS
require('./results');
require('./users');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// const agg = [
//   {
//     '$project': {
//       'title': 1, 
//       '_id': 0, 
//       'edition': 1, 
//       'author': 1, 
//       'publisher': 1, 
//       'isbn': 1
//     }
//   }
// ];
// {$or:[{"title":/.*python*./i},{"edition":/.*john*./i},{"isbn":/.*john*./i} ]}

// MongoClient.connect(
//   'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(connectErr, client) {
//     assert.equal(null, connectErr);
//     const coll = client.db('manualUpdate').collection('results');
//     searchString = "{$or:[{\"title\":/.*" + this.userQueryString + "*./i},{\"edition\":/.*" + this.userQueryString + "*./i},{\"isbn\":/.*john*./i} ]}"
//     coll.find(searchString)//.aggregate(agg, (cmdErr, result) => {
//       assert.equal(null, cmdErr);
//     });
//     client.close();
//   });