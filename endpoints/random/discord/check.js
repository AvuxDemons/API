const request = require("request");

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.token)
            return res.json({
                message: 'Please Provide Discord 0Auth Token',
                usage: 'https://api.avux.ga/random/discord/check?token=<your discord token>'
            });
        request({
            method: "GET",
            url: "https://discordapp.com/api/v7/users/@me",
            headers: {
                authorization: req.query.token
            }
        }, (error, response, body) => {
            if (!body) return;
            var json = JSON.parse(body);
            acc = json;
            if (!json.id) {
                res.json({
                    status: 'Invalid',
                    token: req.query.token
                });
            } else if (!json.verified) {
                res.json({
                    status: 'Unverified',
                    token: req.query.token
                });
            } else {
                res.json({
                    status: 'Verified',
                    token: req.query.token
                });
            }
        });
    }
};