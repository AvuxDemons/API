const replaceString = require('replace-string');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text)
            return res.json({
                message: 'Please Provide Text That You Wanna Reverse',
                usage: 'https://api.avux.ga/random/fun/owoify?text=<your text>'
            });
        const satu = replaceString(req.query.text, 'l', 'w');
        const dua = replaceString(satu, 'r', 'w');
        const tiga = replaceString(dua, 'R', 'W');
        const empat = replaceString(tiga, 'L', 'W');
        res.statusCode = 200;
        res.json({
            message: empat
        });
    }
};