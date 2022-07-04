const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        const url = `https://apiv2.willz.repl.co/image/mexico?image=`;
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: `${config.baseur}/image/mexico?avatar=<avatar>`
            });
        const response = await fetch(url + avatar, {
          method: 'GET',
          headers: { 'Authorization': 'avuxapi' }
        });
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};