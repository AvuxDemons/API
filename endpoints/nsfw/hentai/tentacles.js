const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        let result = HMfull.HMtai.nsfw.tentacles();
        res.status(200).json({
            result: result.url
        });
    }
};