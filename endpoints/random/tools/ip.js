const geoip = require('geoip-lite');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.ip)
            return res.json({
                message: 'Please Provide a Text',
                usage: 'https://api.avux.ga/random/tools/iplookup?ip=<your_ip>'
            });
        const ipcheck = geoip.lookup(req.query.ip);
        res.statusCode = 200;
        res.json(ipcheck);
    }
};