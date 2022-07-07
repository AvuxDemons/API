const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { encode, decode } = req.query;
        if (!encode)
            return fetch(
                'https://some-random-api.ml/binary?decode=' + decode
            )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    res.status(200).json(data);
                });

        fetch(
            'https://some-random-api.ml/binary?encode=' + encode
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.status(200).json(data);
            });
    }
};