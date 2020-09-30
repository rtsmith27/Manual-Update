const mongoose = require('mongoose');
const Res = mongoose.model('Result');

const resultsListByAlphabetical = (req, res) => {  //need to find a REST API to req, res in alphabetical order if possible//
  try{
    console.log("searchstring:",req.params.searchstring);
    //Res.find({$or:[{"title":/.*+req.params.searchstring+*./i},{"author":/.*insertHere*./i},{"publisher":/.*manning*./i},{"isbn":/.**./i}]}).exec(
    //searchString = "{$or:[{\"title\":/.*" + this.userQueryString + "*./i},{\"edition\":/.*" + this.userQueryString + "*./i},{\"isbn\":/.*john*./i} ]}"
    //Res.find({"title": req.params.searchstring}).exec(
    Res.find({$or:[{"title": new RegExp(req.params.searchstring, "gi")},{"author":new RegExp(req.params.searchstring, "gi")},{"publisher":new RegExp(req.params.searchstring, "gi")}]}).exec(
    // Res.find({$text:{$search:"Angular"}}).exec(
      (err, bookResults) => {
        console.log('entered result list', bookResults);
        const results = bookResults.map(result => {
          return {
            _id: result._id,
            title: result.title,
            edition: result.edition,
            author: result.author,
            publisher: result.publisher,
            isbn: result.isbn,
            // updater: result.updater
          }
        });
        res
          .status(200)
          .json(results);
      }
    );
  
  } catch (err) {
    console.log('500');
  res
    .status(500)
    .json(err);
}
  };

const resultsCreate = (req, res) => {
  console.log('resultsCreate message');  //cannot reach this in the terminal
  Res.create({
    title: req.body.title,
    edition: req.body.edition,
    author: req.body.author,
    publisher: req.body.publisher,
    isbn: req.body.isbn,
    lastUpdate: req.body.lastUpdate,
    updateCount: req.body.updateCount,
  }, (err, result) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(result);
    }
  });
};

const resultsReadOne = (req, res) => {
  console.log("resultid", req.params.resultid);
  Res
    .findById(req.params.resultid)
    .exec((err, result) => {
      console.log("entered readone");
      if (!result) {
        return res
          .status(404)
          .json({
            "message": "Book not found"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        console.log("result", result);
        return res
          .status(200)
          .json(result);
      } 
    });
};

const resultsUpdateOne = (req, res) => {
  if (!req.params.resultid) {
    return res
      .status(404)
      .json({
        "message": "Not found, resultid is required"
      });
  }
  Res
    .findById(req.params.resultid)
    .select('-results -rating') // asking for everything but reviews and ratings. do we eant them?//
    .exec((err, result) => {
      if (!result) {
        return res
          .status(404)
          .json({
            "message": "resultid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      result.title = req.body.title;
      result.edition = req.body.edition;
      result.author = req.body.author;
      result.publisher = req.body.publisher;
      result.isbn = req.body.isbn;
      result.lastUpdate = req.body.lastUpdate;
      result.updateCount = req.body.updateCount;
      result.save((err, Res) => {  
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(Res);  
        }
      });
    }
    );
};

const resultsDeleteOne = (req, res) => {
  const { resultid } = req.params;
  if (resultid) {
    Res
      .findByIdAndRemove(resultid)
      .exec((err, result) => {
        if (err) {
          return res
            .status(404)
            .json(err);
        }
        res
          .status(204)
          .json(null);
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No Result"
      });
  }
};

module.exports = {
  resultsListByAlphabetical,
  resultsCreate,
  resultsReadOne,
  resultsUpdateOne,
  resultsDeleteOne
};