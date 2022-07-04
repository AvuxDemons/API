const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://some-random-api.ml/canvas/simpcard?avatar=`;
        
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/simpcard?avatar=<avatar_link>'
            });
        const response = await fetch(url + avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};