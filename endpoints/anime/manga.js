const anime = require('@ytygrunn1ngark456/anime.js');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const { search } = req.query;

        if (!search)
            return res.json({
                result: 'Please Provide The Title You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/manga?search=bunny girl senpai`
            });

        anime.searchManga(search).then(result => {
            res.status(200).json(
                result[0]
            );
        });
    }
};