const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        
        if (!avatar)
            return res.json({
                message: 'Please Provide An Avatar Link',
                usage: `${config.baseur}/image/sepia?avatar=<avatar link>`
            });
        try {
            let img = await new DIG.Sepia().getImage(avatar);
            res.setHeader('content-type', 'image/jpeg').end(img);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};