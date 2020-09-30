const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
// const auth = jwt({
//   secret: process.env.JWT_SECRET,
//   userProperty: 'payload'
// });
const ctrlResults = require('../controllers/results');
const ctrlUpdates = require('../controllers/updates');
const ctrlAuth = require('../controllers/authentication');


// results are locations
router
  .route('/results/search/:searchstring')
  .get(ctrlResults.resultsListByAlphabetical);
router
  .route('/results')
  .post(/*auth,*/ ctrlResults.resultsCreate); /* Working some reason Author me be listed first!!!!????? */

router
  .route('/results/:resultid')
  .get(ctrlResults.resultsReadOne) /* Working */
  .put(/*auth,*/ ctrlResults.resultsUpdateOne) /* Working */
  .delete(/*auth,*/ ctrlResults.resultsDeleteOne); /* Working */

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

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;