const _ = require('lodash');

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => {
        errors.push(error.message);
    });
    return errors;
}

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        let errors = parseErrors(bundle.errors);
        res.status(500).json({errors});
    } else {
        next();
    }
}

module.exports = {sendErrorsOrNext};