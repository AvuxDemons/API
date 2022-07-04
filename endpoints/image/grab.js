const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://api.devs-hub.xyz/grab?image=`;
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: `${config.baseurl}/image/grab?avatar=<avatar_link>`
            });
        const response = await fetch(url + avatar);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};