const reverse = require('reeverse');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { text } = req.query;

        if (!text)
            return res.status(400).json({
                result: 'Please Provide Text That You Wanna Reverse',
                usage: `${config.baseurl}/random/fun/reverse?text=<your text>`
            });

        let rev = reverse(text);
        res.status(200).json({
            result: rev
        });
    }
};