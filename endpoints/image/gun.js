const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://api.weky.xyz/canvas/gun?image=`;
        const webp = await fetch(url + avatar);

        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/gun?avatar=<avatar_link>`
            });

        if (webp.status === 400)
            return res.json({
                error: 'Unsupported image type',
                note: 'Image Endpoint Doesnt Support .webp'
            });
            const response = await fetch(url + avatar.replace('.webp', '.png'));
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};