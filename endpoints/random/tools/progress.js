module.exports = {
    run: async (req, res, next) => {

        if (!req.query.now)
            return res.json({
                message: 'Please Provide a Now Time (Second)',
                usage: 'https://api.avux.ga/random/tools/progress?now=<now time>'
            });
    
        if (!req.query.max)
            return res.json({
                message: 'Please Provide a Max Time (Maximum is 1000 Second)',
                usage: 'https://api.avux.ga/random/tools/translate?now=<now time>&max=<max time>'
            });

        try {
            let now = req.query.now;
            let max = req.query.max;

            let timestamp1 = new Date(now * 1000).toISOString().substr(11, 8);
            let timestamp2 = new Date(max * 1000).toISOString().substr(11, 8);

            let createBar = require('string-progressbar');
            let bars = createBar(max, now, 30);
            res.statusCode = 200;
            res.json({
                bar: createBar(max, now, 30)[0],
                time: `${timestamp1} / ${timestamp2}`
            });
        } catch (err) {
            res.json({
                bar: 'Error , Please Provide a Valid Time'
            });
        }
    }
};