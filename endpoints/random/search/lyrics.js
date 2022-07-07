const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { title } = req.query;
        if (!title)
            return res.json({
                message: 'Please provide a song title / artist',
                usage: `${config.baseurl}/random/search/lyrics?title=<song title / artist>`
            });
        fetch(
            'https://some-random-api.ml/lyrics?title=' + title
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.status(200).json(data);
            });
    }
};