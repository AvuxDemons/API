const api = require('i8.ae')
const config = require('../../../config/config.json');
const i8 = new api(config.shortener)

module.exports = {
    run: async (req, res, next) => {
        let { url, pass } = req.query;
        if (!url)
            return res.json({
                result: 'Please Provide A Link',
                usage: 'https://api.avux.ga/random/tools/shortener?url=<link>'
            });

        if (!pass)
            return i8.short(url).then(result => {
                res.status(200).json({
                    result
                });
            });

        i8.secure(url, pass).then(result => {
            res.status(200).json({
                result
            });
        });
    }
};