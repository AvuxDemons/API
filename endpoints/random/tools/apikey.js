const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { number } = req.query;
        function randomString(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var randomString = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        }

        if (!number)
            return res.json({
                result: 'Please Provide Total Character',
                usage: `${config.baseurl}/random/tools/apikey?number=<your_number>`
            });

        const apikey = randomString(number)

        res.status(200).json({
            result: apikey
        });
    }
};