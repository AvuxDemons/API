const store = require('app-store-scraper');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.app)
            return res.json({
                message: 'Please Provide App Name',
                usage: 'https://api.avux.ga/random/info/appstore?app=<name>&key=<your key>'
            });
        store.search({
            term: req.query.app,
            num: 1
        }).then(result => {
            res.statusCode = 200;
            res.json({
                result: result[0]
            });
        });
    }
};