module.exports = {
    run: async (req, res, next) => {
        const request = require('request');

        if (!req.query.image) {
            return res.status(200).json({
                error: 'No Image Link Provided.'
            });
        }

        request(req.query.image, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (response.headers['content-type'].match(/(image)+\//g).length != 0) {
                    let ih = {
                        Authorization: `Client-ID e0f79f73f9a1015`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    };

                    let dataString = 'image=' + req.query.image;

                    let options = {
                        url: 'https://api.imgur.com/3/image',
                        method: 'POST',
                        headers: ih,
                        body: dataString
                    };

                    function callback(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            res.status(200).json({
                                imgur: JSON.parse(body).data.link,
                                file: req.query.image
                            });
                        }
                    }

                    request(options, callback);
                } else {
                    return res.status(400).json({
                        error: 'Invalid Image Link Provided. Link is not an Image.'
                    });
                }
            } else {
                return res.status(400).json({
                    error: 'The Specified Image Is Not a Valid Link.'
                });
            }
        });
    }
};