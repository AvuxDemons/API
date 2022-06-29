const reverse = require('reeverse');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text)
            return res.json({
                message: 'Please Provide Text That You Wanna Reverse',
                usage: 'https://api.avux.ga/random/fun/reverse?text=<your text>'
            });

        let rev = reverse(req.query.text);
        res.json({
            message: rev
        });
    }
};