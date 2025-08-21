exports.getListItems = (req, res, next) => {
    res.send('This request from controller of the website')
}

exports.errorhandle = (req, res, next) => {
    res.status(404).send('Sorry, this page does not exist. Back to home.');
};
