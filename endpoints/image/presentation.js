const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text } = req.query;
        if (!text)
            return res.json({
                message: 'Please Provide Text Max 300 Char',
                usage: 'https://api.avux.ga/image/presentation?text=<your text>'
            });

        let img = await new DIG.LisaPresentation().getImage(text);
        res.setHeader('content-type', 'image/jpeg');
        res.end(img);
    }
};