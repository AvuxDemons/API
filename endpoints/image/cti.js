const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://cryptons.ga/api/v1/cti?code=`;
        if (!req.query.code)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: `${config.baseurl}/image/cti?code=<your_code>`
            });
        const response = await fetch(url + req.query.code);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};