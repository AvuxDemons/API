const api = require('random-stuff-api');

module.exports = {
    run: async (req, res, next) => {
        api.image.dog().then(dog => {
            res.statusCode = 200;
            res.json({
                result: dog
            });
        });
    }
};