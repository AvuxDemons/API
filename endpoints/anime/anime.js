const malScraper = require('mal-scraper');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const { search } = req.query;

        if (!search)
            return res.json({
                result: 'Please Provide The Anime Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/anime?search=bunny girl senpai`
            });

        malScraper.getInfoFromName(req.query.search).then(result => {
            res.status(200).json({
                result
            });
        })
    }
};