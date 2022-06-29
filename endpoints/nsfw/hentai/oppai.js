const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function Miss() {
            let result = await HMfull.Miss.nsfw.boobs();
            res.statusCode = 200;
            res.json({
                result: result.url
            });
        }
        Miss();
    }
};