const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://api.devs-hub.xyz/gun?image=`;
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/gun?avatar=<avatar_link>'
            });
        const response = await fetch(url + req.query.avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};