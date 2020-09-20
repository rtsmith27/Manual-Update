const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
require('./app_api/models/db')


const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public', 'build')));

// app.use('/api', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res,) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// lines below are unsplash

import config from 'universal-config';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: config.get('ACCESS_KEY')
});

users();
photos();
collections();

function users() {
  console.log("\nUsers")

  unsplash.users.profile('naoufal')
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.users.photos("naoufal")
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.users.likes("naoufal")
    .then(toJson)
    .then(json => {
      console.log(json);
     });
}

function photos() {
  console.log("\nPhotos");

  unsplash.photos.listPhotos(1, 10)
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getPhoto("kZ8dyUT0h30")
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getRandomPhoto({ featured: true })
    .then(toJson)
    .then(json => {
      console.log(json.links.html);
    });
}

function collections() {
  console.log("\nCollections");

   unsplash.collections.listCollections(1, 10)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.getCollection(151165)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.getCollectionPhotos(151165)
     .then(toJson)
     .then(json => {
       console.log(json);
     });
}

module.exports = app;
