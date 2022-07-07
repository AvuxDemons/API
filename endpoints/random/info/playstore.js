const gplay = require('google-play-scraper');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { app } = req.query;
        if (!app)
            return res.status(400).json({
                result: 'Please Provide App Name',
                usage: `${config.baseurl}/random/info/playstore?app=<name>`
            });
        gplay
            .search({
                term: app,
                num: 1
            })
            .then(result => {
                res.status(200).json({
                    result: result[0]
                });
            });
    }
};