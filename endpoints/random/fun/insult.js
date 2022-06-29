const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        fetch('https://api.leaked.wiki/randominsult?json=yes')
        .then(res => {
            return res.json();
        })
        .then(data => {
            res.statusCode = 200;
            res.json(data);
        });
    }
};