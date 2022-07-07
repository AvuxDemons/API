const request = require("request");
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { token } = req.query;

        if (!token)
            return res.status(400).json({
                result: 'Please Provide Discord 0Auth Token',
                usage: `${config.baseurl}/random/discord/check?token=<your discord token>`
            });
        request({
            method: "GET",
            url: "https://discordapp.com/api/v7/users/@me",
            headers: {
                authorization: token
            }
        }, (error, response, body) => {
            if (!body) return;
            var json = JSON.parse(body);
            acc = json;
            if (!json.id) {
                res.status(200).json({
                    status: 'Invalid',
                    token: token
                });
            } else if (!json.verified) {
                res.status(200).json({
                    status: 'Unverified',
                    token: token
                });
            } else {
                res.status(200).json({
                    status: 'Verified',
                    token: token
                });
            }
        });
    }
};