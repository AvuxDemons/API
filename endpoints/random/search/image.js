const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.search)
            return res.json({
                message: 'Please Provide a Text',
                usage: 'https://api.avux.ga/random/search/image?search=<your search>'
            });
        const gis = require('g-i-s');

        gis(req.query.search, sendResults);
        function sendResults(error, results) {
            if (error) {

                res.send({
                    error: 'An error occured'
                })
            }
            else {

                res.send(JSON.stringify(results, null, ' '))
            }
        }

    }
};