const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text } = req.query;
        if (!text)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/presentation?text=<your text>`
            });

        let img = await new DIG.LisaPresentation().getImage(text);
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};