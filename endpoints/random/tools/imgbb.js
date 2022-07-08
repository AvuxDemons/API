const config = require('../../../config/config.json');
const imgbbUploader = require("imgbb-uploader");

module.exports = {
    run: async (req, res, next) => {
        let { image, name } = req.query;

        function randomString(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var randomString = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        }

        if (!image)
            return res.json({
                result: 'Please Provide Image Url',
                usage: `${config.baseurl}/random/tools/imgbb?image=<image_url>`
            });

        let random = randomString(10);

        const options = {
            apiKey: config.imgbb,
            name: name || `Riku-${random}`,
            imageUrl: image
        };

        imgbbUploader(options)
            .then(data => {
                res.status(200).json({
                    result: data
                });
            })
            .catch(error => {
                res.status(400).json({
                    error: error
                });
            });
    }
};