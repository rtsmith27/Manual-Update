const mongoose = require('mongoose');
// const { response } = require('express');
const Res = mongoose.model('Result');
// const Upd = mongoose.model('Update');


const updatesCreate = (req, res) => {
  console.log("inside updatesCreate");
  const resultId = req.params.resultid;
  console.log("resultId updating", req.params.resultid);
    if (resultId) {
      Res
        .findById(resultId)
        .select('updates')
        .exec((err, result) => {
          if (err) {
            res
              .status(400)
              .json(err);
          } else {
            doAddUpdate(req, res, result);
          }
        });
    } else {
      res
        .status(404)
        .json({"message" : "Result not found"});
    }    
};

const updatesReadOne = (req, res) => {
  Res
    .findById(req.params.resultid)
    .select('name updates') //the name of a book and its updates//
    .exec((err, result) => {
      if(!result) {
        return res
          .status(404)
          .json({
            "message": "Book not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      if (result.updates && result.updates.length > 0) {
        const update = result.updates.id(req.params.updateid);
        if (!update) {
          return res
            .status(400)
            .json({
              "message": "update not found"
            });
          } else {
            const response = {
              result : {
                title : result.title,
                id : req.params.resultid
              },
              update
            };
            return res
              .status(200)
              .json(response);
          }  
        } else {
          return res
            .status(404)
            .json({
              "message": "Sorry, no updates found for this manual. Please help the community and add an update if you have one."
           });
          } 
        }     
      );
  };

  const updatesUpdateOne = (req, res) => {
    if (!req.params.resultid || !req.params.updateid) {
      return res
        .status(404)
        .json({
          "message": "Not found, resultid and updateid are both required"
        });
    }
    Res
      .findById(req.params.resultid)
      .select('updates')
      .exec((err, result) => {
        if (!result) {
          return res
            .status(404)
            .json({
              "message": "result not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        if (result.updates && result.updates.length > 0) {
          const thisUpdate = result.updates.id(req.params.updateid);
          if (!thisUpdate) {
            res
              .status(404)
              .json({
                "message": "Update not found"
              });
          } else {
            thisUpdate.updateCount = req.body.chapter;
            thisUpdate.chapter = req.body.chapter;
            thisUpdate.updater = req.body.updater;
            thisUpdate.votes = req.body.votes;
            thisUpdate.section = req.body.section;
            thisUpdate.updateText = req.body.updateText;
            thisUpdate.createdOn = req.body.createdOn;
            result.save((err, result) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                res
                  .status(200)
                  .json(thisUpdate);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({
              "message": "No update to update"
            });
        }
      }
    );
  };
  

  const updatesDeleteOne = (req, res) => {
    const {resultid, updateid} = req.params;
    if (!resultid || !updateid) {
      return res
        .status(404)
        .json({'message': 'Not found, resultid and updateid are both required'});
    }
  
    Res
      .findById(resultid)
      .select('updates')
      .exec((err, result) => {
        if (!result) {
          return res
            .status(404)
            .json({'message': 'Result not found'});
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
  
        if (result.updates && result.updates.length > 0) {
          if (!result.updates.id(updateid)) {
            return res
              .status(404)
              .json({'message': 'update not found'});
          } else {
            result.updates.id(updateid).remove();
            result.save(err => {
              if (err) {
                return res
                  .status(404)
                  .json(err);
              } else {
                res
                  .status(204)
                  .json(null);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({'message': 'No Update to delete'});
        }
      });
  };

  const doAddUpdate = (req, res, result) => {
    console.log("in doAddUpdate");
    if (!result) {
      res
        .status(404)
        .json({"message": "Result not found"});
    } else {
      console.log("inside update else");
      console.log("printing body", req.body);
      //const { chapter, updater, votes, section, updateText, createdOn, updateCount} = req.body;
      let chapter = req.body.chapter;
      let updater = req.body.updater;
      let votes = req.body.votes;
      let section = req.body.section;
      let updateText = req.body.updateText;
      let createdOn = req.body.createdOn;
      let updateCount = req.body.updateCount;
      result.updates.push({
        updateCount,
        chapter,
        updater,
        votes,
        section,
        updateText,
        createdOn
      // const {updateCount, chapter, updater, votes, section, updateText, createdOn} = req.body;
      // result.updates.push({
      //   updateCount: req.body.updateCount,
      //   chapter: req.body.chapter,
      //   updater: req.body.updater,
      //   votes: req.body.votes,
      //   section: req.body.section,
      //   updateText: req.body.updateText,
      //   createdOn: req.body.createdOn
        // technology
      });
      result.save((err, result) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          // updateAverageRating(result._id);  used to call fuction to update the average rating
          const thisUpdate = result.updates.slice(-1).pop();
          res
            .status(201)
            .json(thisUpdate);
        }
      });
    }
  };
  
  const updatesListBySection = (req, res) => {
      res
        .status(200)
        .json({"status" : "success"});
  };
module.exports = {
    updatesListBySection,
    updatesCreate,
    updatesReadOne,
    updatesUpdateOne,
    updatesDeleteOne
};