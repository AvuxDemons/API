const DIG = require('discord-image-generation');

module.exports = {
    run: async (req, res, next) => {
        const avatar1 = req.query.avatar1;
        const avatar2 = req.query.avatar2;
        if (!req.query.avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: 'https://api.avux.ga/image/doublestonk?avatar=<avatar link>'
            });
        if (!req.query.avatar2)
            return res.json({
                message: 'Please Provide Avatar 2 Link',
                usage: 'https://api.avux.ga/image/doublestonk?avata1r=<avatar link>&avatar2=<avatar ink>'
            });
        try {
            let img = await new DIG.DoubleStonk().getImage(avatar1, avatar2);
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