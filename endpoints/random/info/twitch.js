const rapid = require(`../../../source/rapidapi.json`);

module.exports = {
    run: async (req, res, next) => {
        let { username } = req.query;
        if (!username) {
            return res.status(400).json({
                error: 'Please Provide Twitch Username.'
            });
        }
        const request = require('request');

        rand = Math.floor(Math.random() * rapid.length);
        let rapidkey = rapid[rand];

        const options = {
            method: 'GET',
            url: 'https://twitch-advanced.p.rapidapi.com/getUserDataByUsername/' +
                username,
            qs: {
                broadcaster: 'true',
                emotes: 'true',
                badges: 'true',
                schedule: 'true',
                current_stream: 'true',
                teams: 'true',
                follower: 'true',
                follows: 'true'
            },
            headers: {
                'x-rapidapi-host': 'twitch-advanced.p.rapidapi.com',
                'x-rapidapi-key': rapidkey,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            if (JSON.parse(body).title == "") {
                return res.status(400).json({
                    error: "Invalid Username."
                })
            }
            return res.status(200).json({
                result: JSON.parse(body)
            });
        });
    }
};