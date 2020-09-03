const express = require('express');
const router = express.Router();
const ctrlResults = require('../controllers/results');
const ctrlOthers = require('../controllers/others');

/* Homepage & Results pages */
router.get('/', ctrlResults.homepage);
router.get('/results', ctrlResults.resultsList);
router.get('/results/update', ctrlResults.resultsInfo);
router.get('/results/update/new', ctrlResults.addUpdate); /* may not need if add updates are in resultsInfo page */

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/contact', ctrlOthers.contact);
router.get('/login', ctrlOthers.login);


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
