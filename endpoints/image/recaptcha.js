const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text } = req.query;
        if (!text)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/recaptcha?text=<text>`
            });

        let link = await alexclient.image.captcha({
            text: text
        });
        const result = Buffer.from(link, 'base64');
        res.setHeader('content-type', 'image/jpeg').end(result);
    }
};