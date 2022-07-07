const replaceString = require('replace-string');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { text } = req.query;
        if (!text)
            return res.json({
                result: 'Please Provide Text That You Wanna Reverse',
                usage: `${config.baseurl}/random/fun/owoify?text=<your text>`
            });
        const satu = replaceString(text, 'l', 'w');
        const dua = replaceString(satu, 'r', 'w');
        const tiga = replaceString(dua, 'R', 'W');
        const empat = replaceString(tiga, 'L', 'W');
        res.statusCode = 200;
        res.json({
            message: empat
        });
    }
};