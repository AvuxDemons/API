const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.username)
            return res.json({
                message: 'Please Provide a Github Username',
                usage: 'https://api.avux.ga/random/info/github?username=<username>'
            });

        fetch(
                'https://api.github.com/users/' + req.query.username
            )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.statusCode = 200;
                res.json(data);
            });
    }
};