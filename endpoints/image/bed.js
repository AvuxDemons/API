const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2 } = req.query;
        if (!avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: `${config.baseurl}/image/bed?avatar=<avatar link>`
            });
        if (!avatar2)
            return res.json({
                message: 'Please Provide Avatar 2 Link',
                usage: `${config.baseurl}/image/bed?avata1r=<avatar link>&avatar2=<avatar ink>`
            });
        try {
            let img = await new DIG.Bed().getImage(avatar1, avatar2);
            res.setHeader('content-type', 'image/jpeg').end(img);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};