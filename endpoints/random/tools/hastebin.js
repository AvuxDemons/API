const bhastebin = require('better-hastebin');

module.exports = {
	run: async (req, res, next) => {
		bhastebin(req.query.text).then(url => {
			res.statusCode = 200;
			res.json({
				hastebin: url
			});
		});
	}
};