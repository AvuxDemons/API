const client = require('alexflipnote.js');
const alexclient = new client('0cymSxFtqE9_e0UKc0tpQtLx6SW07M3om19QU9L_');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text1)
            return res.json({
                message: 'Please Provide Porn Text',
                usage: 'https://api.avux.ga/image/pornhub?text1=<text>'
            });
        if (!req.query.text2)
            return res.json({
                message: 'Please Provide Hub Text',
                usage: 'https://api.avux.ga/image/pornhub?text1=<text>&text2=<text>'
            });

        let link = await alexclient.image.pornhub({
            text: req.query.text1,
            text2: req.query.text2
        });
        const result = Buffer.from(link, 'base64');
        res.setHeader('content-type', 'image/jpeg');
        res.end(result);
    }
};