const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        let { encode, decode } = req.query;
        if (!encode)
            return fetch(
                'https://some-random-api.ml/base64?decode=' + decode
            )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    res.status(200).json(data);
                });

        fetch(
            'https://some-random-api.ml/base64?encode=' + encode
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.status(200).json(data);
            });
    }
};