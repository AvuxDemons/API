const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://some-random-api.ml/canvas/lolice?avatar=`;
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/lolice?avatar=<avatar_link>'
            });
        const response = await fetch(url + req.query.avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};