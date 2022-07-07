const Topgg = require('@top-gg/sdk');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { token, userid } = req.query;

        if (!userid)
            return res.status(400).json({
                result: 'message',
                usage: `${config.baseurl}/random/discord/vote?token=<your top.gg token>&userid=<user id>`
            });
        const api = new Topgg.Api(token);
        let vote = await api.hasVoted(userid);
        res.status(200).json({
            votestatus: `${vote}`
        });
    }
};