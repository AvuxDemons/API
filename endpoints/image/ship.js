const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2 } = req.query;

        if (!avatar1 || !avatar2)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/ship?avatar1=<avatar link>&avatar2=<avatar link>`
            });
        try {
            let link = await alexclient.image.ship({
                user: avatar1,
                user2: avatar2
            });

            const result = Buffer.from(link, 'base64');
            res.setHeader('content-type', 'image/jpeg').end(result);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};