const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text)
            return res.json({
                message: 'Please Provide a Text',
                usage: 'https://api.avux.ga/ascii?text=<your_text>'
            });
        fetch(`https://artii.herokuapp.com/make?text=${req.query.text}`)
            .then(res => res.text())
            .then(body =>
                res.json({
                    text: req.query.text,
                    result: `${body}`
                })
            );
    }
};