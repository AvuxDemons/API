const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.country)
            return fetch('https://disease.sh/v3/covid-19/all')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    res.statusCode = 200;
                    res.json(data);
                });

        const test = fetch(
                'https://disease.sh/v3/covid-19/countries/' + req.query.country
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