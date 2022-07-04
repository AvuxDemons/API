const client = require('alexflipnote.js');
const alexclient = new client(config.alexclient);
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2 } = req.query;

        if (!avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: 'https://api.avux.ga/image/ship?avatar1=<avatar link>'
            });
        if (!avatar2)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: 'https://api.avux.ga/image/ship?avatar1=<avatar link>&avatar2=<avatar link>'
            });
        try {
            let link = await alexclient.image.ship({
                user: avatar1,
                user2: avatar2
            });

            const result = Buffer.from(link, 'base64');
            res.setHeader('content-type', 'image/jpeg');
            res.end(result);
        } catch (err) {
            res.json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};