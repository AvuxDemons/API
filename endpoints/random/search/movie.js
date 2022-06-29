module.exports = {
    run: async (req, res, next) => {
        if (!req.query.id) {
            res.statusCode = 400;
            return res.json({
                error: 'No Movie ID Provided.'
            });
        }
        const request = require('request');

        const options = {
            method: 'GET',
            url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' +
                req.query.id,
            headers: {
                'x-rapidapi-key': '6b06f921b1msh2f1b184a0a937b6p189ba4jsn9b0b4d0f86bd',
                'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            if (JSON.parse(body).title == "") {
                res.statusCode = 400;
                return res.json({
                    error: "Invalid Movie ID."
                })
            }
            return res.json({
                result: JSON.parse(body)
            });
        });
    }
};