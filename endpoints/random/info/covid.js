const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        let { country } = req.query;
        if (!country)
            return fetch('https://disease.sh/v3/covid-19/all')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    res.status(200).json(data);
                });

        fetch(
            'https://disease.sh/v3/covid-19/countries/' + country
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.status(200).json(data);
            });
    }
};