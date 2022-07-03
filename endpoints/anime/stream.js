const HMfull = require('hmfull');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const { search, source } = req.query;

        if (!source)
            return res.json({
                result: 'Please Provide The Anime Source That You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/stream?source=<4anime|animeflix|animefreak|animekisa|animeidhentai|animeout|animepahe|animerush|gogoanime|hentaihaven|ryuanime|twist>&search=<anime name>`
            });
        if (!search)
            return res.json({
                result: 'Please Provide The Anime Title That You Wanna Search For!',
                usage: `${config.baseurl}/anime/search/stream?source=<4anime|animeflix|animefreak|animekisa|animeidhentai|animeout|animepahe|animerush|gogoanime|hentaihaven|ryuanime|twist>&search=<anime name>`
            });
        try {
            const {
                search,
                getAnime,
                getQualities
            } = require('anigrab').sites.siteLoader(source);
            const searchResults = await search(search);
            res.status(200).json({
                result: searchResults[0]
            });
        } catch (err) {
            res.statusCode = 404;
            res.json({
                error: err.message
            });
        }
    }
};