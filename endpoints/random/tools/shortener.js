const api = require('i8.ae')
const i8 = new api("j0M4sxSfTRIJNj4YFQ5X")

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.url)
            return res.json({
                message: 'Please Provide A Link',
                usage: 'https://api.avux.ga/random/tools/shortener?url=<link>'
            });

        if (!req.query.pass)
            return i8.short(req.query.url).then(result => {
                res.json({
                    result
                });
            });

        i8.secure(req.query.url, req.query.pass).then(result => {
            res.statusCode = 200;
            res.json({
                result
            });
        });
    }
};