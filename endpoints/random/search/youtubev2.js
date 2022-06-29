const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.title)
            return res.json({
                message: 'Please provide a title',
                usage: 'https://api.avux.ga/random/search/youtubev2?title=<title>'
            });
        
            fetch(
                'https://api.somecool.repl.co/yt-search?search=' + req.query.title
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