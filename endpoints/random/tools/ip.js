const geoip = require('geoip-lite');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { ip } = req.query;
        if (!req.query.ip)
            return res.status(400).json({
                result: 'Please Provide a Text',
                usage: `${config.baseurl}/random/tools/iplookup?ip=<your_ip>`
            });
        const ipcheck = geoip.lookup(req.query.ip);
        res.status(200).json(ipcheck);
    }
};