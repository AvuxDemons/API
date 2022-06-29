const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        let result = HMfull.HMtai.sfw.mobileWallpaper();
        res.statusCode = 200;
        res.json({
            result
        });
    }
};