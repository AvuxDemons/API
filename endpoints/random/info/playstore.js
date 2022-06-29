const gplay = require('google-play-scraper');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.app)
            return res.json({
                message: 'Please Provide App Name',
                usage: 'https://api.avux.ga/random/info/playstore?app=<name>'
            });
        gplay
            .search({
                term: req.query.app,
                num: 1
            })
            .then(result => {
                res.statusCode = 200;
                res.json({
                    result: result[0]
                });
            });
    }
};