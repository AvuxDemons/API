const TikTokScraper = require('tiktok-scraper');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.username)
            return res.json({
                message: 'Please Provide a Tiktok Username',
                usage: 'https://api.avux.ga/random/info/tiktok?username=<your username>'
            });

        (async () => {
            try {
                const posts = await TikTokScraper.getUserProfileInfo(
                    req.query.username
                );
                res.statusCode = 200;
                res.json(posts);
            } catch (error) {
                console.log(error);
            }
        })();
    }
};