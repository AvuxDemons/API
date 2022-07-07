const wikipics = require('wikipics-api');

module.exports = {
    run: async (req, res, next) => {
        wikipics().then(data => {
            res.status(200).json({
                result: data
            });
        });
    }
};