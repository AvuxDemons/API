const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        let result = HMfull.HMtai.sfw.wallpaper().url;
        res.status(200).json({
            result
        });
    }
};