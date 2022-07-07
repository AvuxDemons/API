const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { search } = req.query;

        if (!search)
            return res.status(400).json({
                result: 'Please Provide The Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/mangadex?search=bunny girl senpai`
            });
        const MFA = require('mangadex-full-api');

        MFA.login(config.mangadexusername, config.mangadexpass).then(async () => {
            const result = await MFA.Manga.search({
                title: search,
                limit: Infinity
            });
            res.status(200).json({
                result: result[0]
            });
        })
    }
};