const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://some-random-api.ml/canvas/horny?avatar=`;
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar',
                usage: 'https://api.avux.ga/image/horny?avatar=<url_link>'
            });

        const response = await fetch(url + req.query.avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
}