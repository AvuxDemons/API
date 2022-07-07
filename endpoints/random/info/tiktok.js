const TikTokScraper = require('tiktok-scraper');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { username } = req.query;
        if (!username)
            return res.json({
                result: 'Please Provide a Tiktok Username',
                usage: `${config.baseurl}/random/info/tiktok?username=<your username>`
            });

        (async () => {
            try {
                const posts = await TikTokScraper.getUserProfileInfo(
                    username
                );
                res.status(200).json(posts);
            } catch (error) {
                console.log(error);
            }
        })();
    }
};