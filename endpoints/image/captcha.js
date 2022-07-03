const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://cool-api.xyz/captcha?code=`;
        if (!req.query.code)
            return res.json({
                message: 'Please Provide Captcha Code',
                usage: `${config.baseurl}/image/captcha?code=<code>`
            });
        const response = await fetch(url + req.query.code);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};