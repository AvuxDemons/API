const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.search)
            return res.send({
                result: 'Please Provide The Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/mangadex?search=bunny girl senpai`
            });
        const MFA = require('mangadex-full-api');

        MFA.login('apiavuxga', 'avuxga123').then(async () => {
            const result = await MFA.Manga.search({
                title: req.query.search,
                limit: Infinity
            });
            res.statusCode = 200;
            res.json({
                result
            });
        })
    }
};