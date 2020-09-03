/* GET 'about' page */
const about = (req, res) => {
    res.render( 'generic-text', 
    { 
        title: 'About Manual Update',
        content: 'Maual Update was created to help people overcome errors or outdated code in manuals and textbooks.'
    });
};

/* Get 'contact' page */
const contact = (req, res) => {
    res.render( 'generic-text', { title: 'Contact'});
};

/* Get 'login' page */
const login = (req, res) => {
    res.render( 'generic-text', { title: 'Login'});
};

module.exports = {
 about,
 contact,
 login,
};
