const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        if (!avatar)
            return res.json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseurl}/image/blur?avatar=<avatar link>&level=<1-10>`
            });
        try {
            let img = await new DIG.Blur().getImage(avatar);
            res.setHeader('content-type', 'image/jpeg').end(img);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};