const malScraper = require('mal-scraper');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.search)
            return res.send({
                result: 'Please Provide The Anime Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/anime?search=bunny girl senpai`
            });

        malScraper.getInfoFromName(req.query.search).then(data => {
            res.statusCode = 200;
            res.json({
                result: data
            });
        })
    }
};