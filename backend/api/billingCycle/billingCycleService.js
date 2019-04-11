const BillingCycle = require('./billingCycle');
const {sendErrorsOrNext} = require('../../lib/restful/errors/parse');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    });
});

module.exports = BillingCycle;