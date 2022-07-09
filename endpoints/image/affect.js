const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseurl}/image/affect?avatar=<avatar link>`
            });
        try {
            let avatars = avatar.replace('.webp', '.png');
            let img = await new DIG.Affect().getImage(avatars);
            res.setHeader('content-type', 'image/jpeg').end(img);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};