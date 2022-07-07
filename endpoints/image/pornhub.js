const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text1, text2 } = req.query;
        if (!text1 || !text2)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/pornhub?text1=<text>&text2=<text>`
            });

        let link = await alexclient.image.pornhub({
            text: text1,
            text2: text2
        });
        const result = Buffer.from(link, 'base64');
        res.setHeader('content-type', 'image/jpeg').end(result);
    }
};