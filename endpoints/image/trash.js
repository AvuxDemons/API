const DIG = require('discord-image-generation');

module.exports = {
    run: async (req, res, next) => {
        const avatar = req.query.avatar;
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide An Avatar Link',
                usage: 'https://api.avux.ga/image/trash?avatar=<avatar link>'
            });
        try {
            let img = await new DIG.Trash().getImage(avatar);
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