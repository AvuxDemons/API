const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function Miss() {
            let result = await HMfull.Miss.nsfw.boobs();
            res.status(200).json({
                result: result.url
            });
        }
        Miss();
    }
};