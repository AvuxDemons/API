module.exports = {
    run: async (req, res, next) => {
        function randomString(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var randomString = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        }

        if (!req.query.number)
            return res.json({
                message: 'Please Provide Total Character',
                usage: 'https://api.avux.ga/random/tools/apikey?number=<your_number>'
            });

        const apikey = randomString(req.query.number)

        res.statusCode = 200;
        res.json({
            message: apikey
        });
    }
};