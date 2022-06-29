const wikipics = require('wikipics-api');

module.exports = {
    run: async (req, res, next) => {
        wikipics().then(data => {
            res.statusCode = 200;
            res.json({
                message: data
            });
        });
    }
};