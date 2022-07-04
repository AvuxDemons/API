const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://some-random-api.ml/canvas/horny?avatar=`;
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar',
                usage: `${config.baseurl}/image/horny?avatar=<url_link>`
            });

        const response = await fetch(url + avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
}