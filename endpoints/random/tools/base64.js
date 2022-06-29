const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.encode)
            return fetch(
                    'https://some-random-api.ml/base64?decode=' + req.query.decode
                )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    res.statusCode = 200;
                    res.json(data);
                });

        fetch(
                'https://some-random-api.ml/base64?encode=' + req.query.encode
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