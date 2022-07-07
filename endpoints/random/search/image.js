const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { search } = req.query;
        if (!search)
            return res.json({
                result: 'Please Provide a Text',
                usage: `${config.baseurl}/random/search/image?search=<your search>`
            });
        const gis = require('g-i-s');

        gis(search, sendResults);
        function sendResults(error, results) {
            if (error) {

                res.json({
                    error: 'An error occured'
                })
            }
            else {
                res.json({ result: results[Math.floor(Math.random() * results.length)] })
            }
        }

    }
};