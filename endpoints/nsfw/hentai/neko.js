const HMfull = require('hmfull');

module.exports = {
    run: async (req, res, next) => {
        async function NekoLove() {
            let result = await HMfull.NekoLove.sfw.neko();
            res.status(200).json({
                result: result.url
            });
        }
        NekoLove();
    }
};