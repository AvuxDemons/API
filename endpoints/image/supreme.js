const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text } = req.query;
        if (!text)
            return res.json({
                message: 'Please Provide Supreme Text',
                usage: 'https://api.avux.ga/image/supreme?text=<your text>'
            });

        let link = await alexclient.image.supreme({
            text: text
        });
        const result = Buffer.from(link, 'base64');
        res.setHeader('content-type', 'image/jpeg');
        res.end(result);
    }
};