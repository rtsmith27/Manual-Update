/* GET 'Home' page */
const homepage = (req, res) => {
    res.render( 'Homepage', { title: 'Home'});
};
/* GET 'Results List' page */
const resultsList = (req, res) => {
    res.render( 'results-list', 
      { 
        title: 'Manual Update - Search Results',
        pageHeader: {
          title: 'Manual Update'
      },
        results: [
          {
            title: 'Getting MEAN with Mongo, Express, Angular and Node',
            edition: 'Second Edition',
            author: ['Simon Holmes', 'Clive Harber'],
            publisher: 'Manning',
            isbn: '978-1-61729-475-4', 
            updates: '24' 
          }
        ]
    });
};

/* GET 'Results Info' page */
const resultsInfo = (req, res) => {
    res.render( 'results-info', 
      { 
        title: 'Getting MEAN with Mongo, Express, Angular and Node',
        edition: 'Second Edition',
        author: ['Simon Holmes', 'Clive Harber'],
        publisher: 'Manning',
        isbn: '978-1-61729-475-4',
        updates: '24'
    });
};
/* GET 'Add Update' page */ 
/* may not need if updates are in resultsInfo page */
const addUpdate = (req, res) => {
    res.render( 'results-add-update', { title: 'Add Update'});
};

module.exports = {
 homepage,
 resultsList,
 resultsInfo,
 addUpdate
};


// router.get('/', ctrlHomepage);
// router.get('/results', ctrlHomepage.resultsList);
// router.get('/results/update', ctrlHomepage.resultsInfo);
// router.get('/results/update/new', ctrlHomepage.addUpdate); /* may not need if add updates are in resultsInfo page */
