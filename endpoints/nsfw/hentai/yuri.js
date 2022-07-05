const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function NekoBot() {
            let result = await HMfull.NekoBot.nsfw.yuri();
            res.statusCode = 200;
            res.json({
                result: result.url
            });
        }
        NekoBot();
    }
};