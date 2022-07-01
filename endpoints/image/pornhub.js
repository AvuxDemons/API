const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../../config/config.json');

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