const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        let result = HMfull.HMtai.nsfw.public();
        res.statusCode = 200;
        res.json({
            result: result.url
        });
    }
};