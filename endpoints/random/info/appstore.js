const store = require('app-store-scraper');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { app } = req.query;
        if (!app)
            return res.json({
                result: 'Please Provide App Name',
                usage: `${config.baseurl}/random/info/appstore?app=<name>&key=<your key>`
            });
        store.search({
            term: app,
            num: 1
        }).then(result => {
            res.status(200).json({
                result: result[0]
            });
        });
    }
};