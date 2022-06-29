const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.title)
            return res.json({
                message: 'Please provide a song title / artist',
                usage: 'https://api.avux.ga/random/search/lyrics?title=<song title / artist>'
            });
        const test = fetch(
                'https://some-random-api.ml/lyrics?title=' + req.query.title
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