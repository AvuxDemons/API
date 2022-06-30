const anime = require('@ytygrunn1ngark456/anime.js');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.search)
            return res.send({
                result: 'Please Provide The Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/manga?search=bunny girl senpai`
            });

        anime.searchManga(req.query.search).then(data => {
            res.statusCode = 200;
            res.json({
                result: data[0]
            });
        });
    }
};