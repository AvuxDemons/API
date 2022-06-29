const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function Nekos() {
            let result = await HMfull.Nekos.nsfw.yuri();
            res.statusCode = 200;
            res.json({
                result: result.url
            });
        }
        Nekos();
    }
};