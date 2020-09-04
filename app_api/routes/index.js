const express = require('express');
const router = express.Router();
// const ctrlLocations = require('../controllers/homepage');
const ctrlResults = require('../controllers/results');
const ctrlUpdates = require('../controllers/updates');

// homepage
// router
//   .route('/homepage');

// results are locations
router
  .route('/results')
  // .get(ctrlResults.resultsListByAlphabetical)
  .post(ctrlResults.resultsCreate);

router
  .route('/results/:resultsid')
  .get(ctrlResults.resultsReadOne)
  .put(ctrlResults.resultsUpdateOne)
  .delete(ctrlResults.resultsDeleteOne);

// updates are reviews
router
  .route('/results/:resultsid/updates')
  .get(ctrlUpdates.updatesListBySection)
  .post(ctrlUpdates.updatesCreate);

router
  .route('/results/:resultsid/updates/:updateid')
  .get(ctrlUpdates.updatesReadOne)
  .put(ctrlUpdates.updatesUpdateOne)
  .delete(ctrlUpdates.updatesDeleteOne);

module.exports = router;