const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const id = req.query.id;
        
        if (!req.query.id)
        return res.json({
            message: 'Please Provide User ID',
            usage: 'https://api.avux.ga/random/discord/user?id=<your discord user id>'
        });

        fetch(`https://api.leaked.wiki/discorduser?id=${id}&json=yes`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            res.statusCode = 200;
            res.json(data);
        });
    }
};