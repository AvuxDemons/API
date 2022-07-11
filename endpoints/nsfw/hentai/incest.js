const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        let result = HMfull.HMtai.nsfw.incest();
        res.status(200).json({
            result: result.url
        });
    }
};