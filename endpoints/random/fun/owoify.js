const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { text } = req.query;
        if (!text)
            return res.json({
                result: 'Please Provide Text That You Wanna Change to Owoify',
                usage: `${config.baseurl}/random/fun/owoify?text=<your text>`
            });
        const satu = text.replaceAll('l', 'w');
        const dua = satu.replaceAll('r', 'w');
        const tiga = dua.replaceAll('R', 'W');
        const empat = tiga.replaceAll('L', 'W');
        res.status(200).json({
            result: empat
        });
    }
};