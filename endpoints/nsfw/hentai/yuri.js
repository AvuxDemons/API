const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function NekoBot() {
            let result = await HMfull.NekoBot.nsfw.yuri();
            res.status(200).json({
                result: result.url
            });
        }
        NekoBot();
    }
};