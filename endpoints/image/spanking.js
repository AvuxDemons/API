const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2 } = req.query;

        if (!avatar1 || !avatar2)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/spank?avata1r=<avatar link>&avatar2=<avatar link>`
            });
        let img = await new DIG.Spank().getImage(avatar1.replace('.webp', '.png'), avatar2.replace('.webp', '.png'));
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};