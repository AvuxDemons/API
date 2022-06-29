const Topgg = require('@top-gg/sdk');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.token)
            return res.json({
                message: 'Please Provide Top.gg Token',
                usage: 'https://api.avux.ga/random/discord/vote?token=<your top.gg token>&userid=<user id>'
            });
        if (!req.query.userid)
            return res.json({
                message: 'Please Provide User ID That You Wanna Check',
                usage: 'https://api.avux.ga/random/discord/vote?token=<your top.gg token>&userid=<user id>'
            });
        const api = new Topgg.Api(req.query.token);
        let vote = await api.hasVoted(req.query.userid);
        res.statusCode = 200;
        res.json({
            votestatus: `${vote}`
        });
    }
};