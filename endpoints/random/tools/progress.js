const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { now, max } = req.query;
        if (!now || !max)
            return res.json({
                result: 'Please Provide a Max Time (Maximum is 1000 Second)',
                usage: `${config.baseurl}/random/tools/translate?now=<now time>&max=<max time>`
            });

        try {

            let timestamp1 = new Date(now * 1000).toISOString().substr(11, 8);
            let timestamp2 = new Date(max * 1000).toISOString().substr(11, 8);

            let createBar = require('string-progressbar');
            let bars = createBar(max, now, 30);
            res.status(200).json({
                bar: createBar(max, now, 30)[0],
                time: `${timestamp1} / ${timestamp2}`
            });
        } catch (err) {
            res.status(400).json({
                error: 'Error , Please Provide a Valid Time'
            });
        }
    }
};