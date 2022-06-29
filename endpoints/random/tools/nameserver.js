const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const domain = req.query.domain;
        
        if (!req.query.domain)
        return res.json({
            message: 'Please Provide a Domain',
            usage: 'https://api.avux.ga/random/tools/nameserver?domain=<your domain>'
        });

        fetch(`https://api.leaked.wiki/nslookup?domain=${domain}&json=yes`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            res.statusCode = 200;
            res.json(data);
        });
    }
};