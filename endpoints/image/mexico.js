const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://apiv2.willz.repl.co/image/mexico?image=`;
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/mexico?avatar=<avatar>'
            });
        const response = await fetch(url + req.query.avatar, {
          method: 'GET',
          headers: { 'Authorization': 'avuxapi' }
        });
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};