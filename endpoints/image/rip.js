const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        
        if (!avatar)
            return res.json({
                message: 'Please Provide An Avatar Link',
                usage: 'https://api.avux.ga/image/rip?avatar=<avatar link>'
            });
        try {
            let img = await new DIG.Rip().getImage(avatar);
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