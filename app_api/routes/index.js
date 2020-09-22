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
  .get(ctrlResults.resultsListByAlphabetical)
  .post(ctrlResults.resultsCreate); /* Working some reason Author me be listed first!!!!????? */

router
  .route('/results/:resultid')
  .get(ctrlResults.resultsReadOne) /* Working */
  .put(ctrlResults.resultsUpdateOne) /* Working */
  .delete(ctrlResults.resultsDeleteOne); /* Working */

// updates are reviews
router
  .route('/results/:resultid/updates')
  /* change the get to put */
  .get(ctrlUpdates.updatesListBySection) /* Do I Need This?? */
  .post(ctrlUpdates.updatesCreate); /* Working */

router
  .route('/results/:resultid/updates/:updateid')
  .get(ctrlUpdates.updatesReadOne) /* Working */
  .put(ctrlUpdates.updatesUpdateOne) /* Working */
  .delete(ctrlUpdates.updatesDeleteOne); /* Working */


module.exports = router;