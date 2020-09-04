const mongoose = require('mongoose');
const Res = mongoose.model('Result');
/* do same function in Angular */
// const resultsListByAlphabetical = (req, res) => {  //need to find a REST API to req, res in alphabetical order if possible//
//   try{
//   const results = results.map(result => {
//     return {
//       _id: result._id,
//       title: result.title,
//       edition: result.edition,
//       author: result.author,
//       publisher: result.publisher,
//       isbn: result.isbn
//     }
//   });
//   res
//     .status(200)
//     .json(results);
//   }catch (err) {
//   res
//     .status(404)
//     .json(err);
// }
//   };


const resultsCreate = (req, res) => {
  Res.create({
    title: req.body.title,
    edition: req.body.edition,
    author: req.body.author,
    publisher: req.body.publisher,
    isbn: req.body.isbn,
  }, (err, result) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(200)
        .json({ result });
    }
  });
};

const resultsReadOne = (req, res) => {
  Res
    .findById(req.params.resultid)
    .exec((err, result) => {
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

      result.save((err, Res) => {  //Res replaced loc ? what was loc? //
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(Res);  //Res replaced loc ? what was loc? //
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
  // resultsListByAlphabetical,
  resultsCreate,
  resultsReadOne,
  resultsUpdateOne,
  resultsDeleteOne
};