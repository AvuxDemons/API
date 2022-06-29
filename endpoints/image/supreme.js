const client = require('alexflipnote.js');
const alexclient = new client('0cymSxFtqE9_e0UKc0tpQtLx6SW07M3om19QU9L_');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text)
            return res.json({
                message: 'Please Provide Supreme Text',
                usage: 'https://api.avux.ga/image/supreme?text=<your text>'
            });

        let link = await alexclient.image.supreme({
            text: req.query.text
        });
        const result = Buffer.from(link, 'base64');
        res.setHeader('content-type', 'image/jpeg');
        res.end(result);
    }
};