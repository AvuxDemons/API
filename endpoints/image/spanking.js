const DIG = require('discord-image-generation');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const avatar1 = req.query.avatar1;
        const avatar2 = req.query.avatar2;

        if (!req.query.avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: 'https://api.avux.ga/image/spank?avatar1=<avatar link>'
            });
        if (!req.query.avatar2)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: 'https://api.avux.ga/image/spank?avata1r=<avatar link>&avatar2=<avatar link>'
            });
        try {
            let img = await new DIG.Spank().getImage(avatar1, avatar2);
            res.setHeader('content-type', 'image/jpeg');
            res.end(img);
        } catch (err) {
            res.json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};