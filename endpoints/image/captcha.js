const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { code } = req.query;
        const url = `https://cool-api.xyz/captcha?code=`;
        if (!code)
            return res.json({
                message: 'Please Provide Captcha Code',
                usage: `${config.baseurl}/image/captcha?code=<code>`
            });
        const response = await fetch(url + code);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};