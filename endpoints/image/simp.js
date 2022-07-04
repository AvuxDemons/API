const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://api.devs-hub.xyz/simp?image=`;
        const webp = await fetch(url + avatar);

        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/pray?avatar=<avatar_link>'
            });

        if (webp.status === 400)
            return res.json({
                error: 'Unsupported image type',
                note: 'Image Endpoint Doesnt Support .webp'
            });

            const response = await fetch(url + avatar);
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            res.setHeader('content-type', 'image/jpeg');
            res.end(buffer);
    }
};