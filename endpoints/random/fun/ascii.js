const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { text } = req.query;
        if (!text)
            return res.status(400).json({
                result: 'Please Provide a Text',
                usage: `${config.baseurl}/ascii?text=<your_text>`
            });
        fetch(`https://artii.herokuapp.com/make?text=${text}`)
            .then(res => res.text())
            .then(body =>
                res.status(200).json({
                    text: text,
                    result: `${body}`
                })
            );
    }
};