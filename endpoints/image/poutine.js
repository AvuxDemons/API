const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/poutine?avatar=<avatar link>`
            });
        let img = await new DIG.Poutine().getImage(avatar.replace('.webp', '.png'));
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};