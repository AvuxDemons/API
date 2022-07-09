const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://some-random-api.ml/canvas/simpcard?avatar=`;

        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/simpcard?avatar=<avatar_link>`
            });
        let avatars = avatar.replace('.webp', '.png');
        const response = await fetch(url + avatars);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};